import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LanguageResponse} from '../../../shared/models/languages/language-response';
import {LanguageService} from '../../../core/services/http/language.service';
import {ConnectedUser} from '../../../shared/models/users/connected-user';
import {BehaviorSubject, Subscription} from 'rxjs';
import {UserStateService} from '../../../core/services/user-state.service';
import {CodeService} from '../../../core/services/http/code.service';
import {CodeExecutionResponse} from '../../../shared/models/codes/code-execution-response';
import {MatDialog} from '@angular/material/dialog';
import {GameEventService} from '../../../core/services/game-event.service';
import {CodeExecutionCommandDTO} from '../../../shared/dtos/code/code-execution-command-dto';
import {GameRulesFailureComponent} from '../game-rules-failure/game-rules-failure.component';
import {EventMessageSource} from '../../../core/services/http/event-message-source';
import {SseEmissionFactory} from '../../../shared/factories/sse/sse-emission-factory';
import {JacketDTO, SseEmissionType} from '../../../shared/dtos/sse/jacket-dto';
import {GameEventDTO, WorldDTO} from '../../../shared/dtos/sse/game-event-dto';
import {GameRulesComponent} from '../game-rules/game-rules.component';
import {KotlinLibraryDetailsComponent} from '../kotlin-library-details/kotlin-library-details.component';
import {ActiveConstraintsComponent} from '../active-constraints/active-constraints.component';
import {CompilationStepDto} from '../../../shared/dtos/sse/compilation-step-dto';


@Component({
  selector: 'app-game-root',
  templateUrl: './game-root.component.html',
  styleUrls: ['./game-root.component.scss']
})
export class GameRootComponent implements OnInit, OnDestroy {
  code: string;
  languages: LanguageResponse[] = [];
  user!: ConnectedUser | null;
  user$ = new BehaviorSubject<ConnectedUser | null>(null);

  private userSub!: Subscription;
  codeResponse = {rulesSuccess: false, failedConstraints: [], similaritySuccess: false} as CodeExecutionResponse;


  lastGameEvent: GameEventDTO | null = null;
  gameEvents: GameEventDTO[] = [];
  lastWorld: WorldDTO | null = null;
  reset = false;
  executionLoading = false;
  step: string = 'Rien en cours';

  constructor(
    private router: Router,
    private languageService: LanguageService,
    private userStateService: UserStateService,
    private codeService: CodeService,
    public dialog: MatDialog,
    private gameEventService: GameEventService,
    private sseEmissionFactory: SseEmissionFactory,
  ) {
    this.code = 'return MobAction(ActionType.TRIPPED, Direction.UP)\n';
  }

  ngOnInit(): void {
    this.languageService.getLanguages().subscribe(async (value) => {
      this.languages = value;
      console.log(this.languages);
    });

    this.userSub = this.userStateService.userSubject$.subscribe(user => {
      this.user = user;
      console.log(user);
      this.user$.next(this.user);
    });
    this.userStateService.loadUser();

    this.listenToServer();
  }

  executeCode($event: any): void {

    this.reset = true;

    this.executionLoading = true;

    const chosenLanguageId = this.languages[0].id;

    const executionCommandDTO = new CodeExecutionCommandDTO(this.code, chosenLanguageId);


    this.codeService.executeCode(executionCommandDTO).subscribe(res => {
      this.codeResponse = res;
      if (!this.codeResponse.rulesSuccess || !this.codeResponse.similaritySuccess) {
        const dialogRef = this.dialog.open(GameRulesFailureComponent, {
          data: {
            codeResponse: this.codeResponse
          }
        });
        dialogRef.afterClosed().subscribe(result => {
          console.log('close dialog');
          this.codeResponse.rulesSuccess = true;
          this.codeResponse.failedConstraints = [];
          this.codeResponse.similaritySuccess = true;
        });
      }
    });
  }

  private listenToServer(): void {
    this.gameEventService.subscribeToSSE().subscribe(
      (event: EventMessageSource) => {

        const jacket: JacketDTO = JSON.parse(event.eventMsg.data);
        jacket.data = this.sseEmissionFactory.get(jacket);

        switch (jacket.type) {
          case SseEmissionType.COMPILATION_STEP:
            this.changeStep(jacket.data as CompilationStepDto);
            break;
          case SseEmissionType.GAME_EVENT:
            this.lastGameEvent =  (jacket.data as GameEventDTO);
            this.lastWorld = (jacket.data as GameEventDTO).world;
            this.executionLoading = false;
            break;
          case SseEmissionType.HEARTBEAT:
        }
      }
    );
  }

  private changeStep(stepDto: CompilationStepDto): void {
    switch (stepDto.compilationType) {
      case 'PARSING':
        this.step = 'Parsing du code';
        break;
      case 'COMPILATION':
        this.step = 'Compilation du code';
        break;
      case 'RUNNING':
        this.step = 'Le jeu est en cours d\'exécution';
        break;
      case 'DONE':
        this.step = 'La partie est finie';
        break;
      case 'NONE':
        this.step = 'Pas de partie en cours';
        break;
      default:
        this.step = 'Etape inexistante';

    }
  }

  ngOnDestroy(): void {
    this.gameEventService.clearGameEventSubscription();
  }

  onRulesOpen(): void {
    const dialogRef = this.dialog.open(GameRulesComponent, {
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('close dialog');
    });
  }

  onKotlinLibOpen(): void {
    const dialogRef = this.dialog.open(KotlinLibraryDetailsComponent, {
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('close dialog');
    });
  }

  onActiveConstraintsOpen(): void {
    const dialogRef = this.dialog.open(ActiveConstraintsComponent, {
      data: {
        userLevel: this.user?.level
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('close dialog');
    });
  }
}
