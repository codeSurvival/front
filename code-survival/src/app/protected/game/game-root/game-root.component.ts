import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LanguageResponse} from '../../../shared/models/languages/language-response';
import {LanguageService} from '../../../core/services/http/language.service';
import {ConnectedUser} from '../../../shared/models/users/connected-user';
import {BehaviorSubject, Subject, Subscription} from 'rxjs';
import {UserStateService} from '../../../core/services/user-state.service';
import {CodeExecutionCommandDTO} from '../../../shared/dtos/code/code-execution-command-dto';
import {CodeService} from '../../../core/services/http/code.service';
import {CodeExecutionResponse} from '../../../shared/models/codes/code-execution-response';
import {MatDialog} from '@angular/material/dialog';
import {GameRulesFailureComponent} from '../game-rules-failure/game-rules-failure.component';



@Component({
  selector: 'app-game-root',
  templateUrl: './game-root.component.html',
  styleUrls: ['./game-root.component.scss']
})
export class GameRootComponent implements OnInit {
  code: string;
  languages: LanguageResponse[] = [];
  user!: ConnectedUser;
  user$ = new Subject<ConnectedUser>();
  private userSub!: Subscription;
  codeResponse = {success : false, failedConstraints : [] } as CodeExecutionResponse;

  constructor(
    private router: Router,
    private languageService: LanguageService,
    private userStateService: UserStateService,
    private codeService: CodeService,
    public dialog: MatDialog)
  {
    this.code = ' public static void main() {\n\tConsole.Writeln("Hello world!");\n}';
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
  }

  executeCode($event: any): void {
    const chosenLanguageId = this.languages[0].id;

    const executionCommandDTO = new CodeExecutionCommandDTO(this.code, chosenLanguageId);


    this.codeService.executeCode(executionCommandDTO).subscribe( res => {
      this.codeResponse = res;
      if (!this.codeResponse.success) {
        const dialogRef = this.dialog.open(GameRulesFailureComponent, {
          data: {
            codeResponse: this.codeResponse
          }
        });
        dialogRef.afterClosed().subscribe(result => {
          console.log('close dialog');
          this.codeResponse.success = true;
          this.codeResponse.failedConstraints = [];
        });
      }
    });
  }

}
