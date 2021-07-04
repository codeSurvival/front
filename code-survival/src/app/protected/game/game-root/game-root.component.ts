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
import {environment} from '../../../../environments/environment';
import {CodeExecutionCommandDTO} from '../../../shared/dtos/code/code-execution-command-dto';
import {GameRulesFailureComponent} from '../game-rules-failure/game-rules-failure.component';


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
  private servicesUrl = environment.services_url;

  private userSub!: Subscription;
  codeResponse = {rulesSuccess : false, failedConstraints : [], similaritySuccess : false } as CodeExecutionResponse;

  constructor(
    private router: Router,
    private languageService: LanguageService,
    private userStateService: UserStateService,
    private codeService: CodeService,
    public dialog: MatDialog,
    private gameEventService: GameEventService
    )
  {
    this.code = 'return MobAction(ActionType.WALK, Direction.UP)\n';
  }

  ngOnInit(): void {
    this.languageService.getLanguages().subscribe( async (value) => {
      this.languages = value;
      console.log(this.languages);
    });

    this.userSub = this.userStateService.userSubject$.subscribe( user => {
      this.user = user;
      console.log(user);
      this.user$.next( this.user);
    });
    this.userStateService.loadUser();

    this.subscribeToGameEventListener();
  }

  executeCode($event: any): void {
    const chosenLanguageId = this.languages[0].id;

    const executionCommandDTO = new CodeExecutionCommandDTO(this.code, chosenLanguageId);


    this.codeService.executeCode(executionCommandDTO).subscribe( res => {
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

  private subscribeToGameEventListener(): void {
    this.gameEventService.subscribeToGameEventSse().subscribe(
        (data: string) => console.log(data)
    );
  }

  ngOnDestroy(): void {
    this.gameEventService.clearGameEventSubscription();
  }
}
