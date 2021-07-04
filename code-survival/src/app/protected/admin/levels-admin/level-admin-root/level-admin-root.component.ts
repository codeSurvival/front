import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LevelsService} from '../../../../core/services/levels.service';
import {Level} from '../../../../shared/models/levels/level';
import {HttpErrorResponse} from '@angular/common/http';
import {Constraint} from '../../../../shared/models/levels/constraint';
import {LanguageService} from '../../../../core/services/http/language.service';
import {LanguageResponse} from '../../../../shared/models/languages/language-response';
import Swal from 'sweetalert2';
import {timer} from 'rxjs';
import {RegexCreateDto} from '../../../../shared/dtos/levels/regex-create-dto';
import {MatDialog} from '@angular/material/dialog';
import {GameRulesFailureComponent} from '../../../game/game-rules-failure/game-rules-failure.component';
import {RegexPlaygroundComponent} from '../regex-playground/regex-playground.component';

@Component({
  selector: 'app-level-admin-root',
  templateUrl: './level-admin-root.component.html',
  styleUrls: ['./level-admin-root.component.scss']
})
export class LevelAdminRootComponent implements OnInit {

  levelId!: number ;
  level!: Level;
  constraints: Constraint[] = [];
  languages: LanguageResponse[] = [];

  loading = true;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private levelsService: LevelsService,
              private languageService: LanguageService,
              public dialog: MatDialog,)
  {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.levelId = +params.id;


      } else {
        this.router.navigate(['/admin/levels']);
      }
    });
  }

  ngOnInit(): void {

    this.loadLevel();

    this.languageService.getLanguages().subscribe( async (value) => {
      this.languages = value;
    }, (err: HttpErrorResponse) => {

        this.unknownError();
    });

    console.log('in level edit' + this.levelId);

    console.log(this.level);
  }

  loadLevel(): void {
    this.loading = true;
    this.levelsService.getLevel(this.levelId).subscribe(async (value) => {
      this.level = value;
      this.constraints = this.level.constraints;
      this.loading = false;

      console.log(this.level);
    }, (err: HttpErrorResponse) => {
      if (err.status === 409) {
        this.loading = false;
        this.router.navigate(['/admin/levels']);
      }
    });
  }

  private unknownError(): void {
    Swal.fire({
      text: 'Erreur inconnue, veuillez contacter les développeurs',
      icon: 'error'
    });
  }

  onCreateConstraint($event: Constraint): void {
    this.loading = true;
    this.levelsService.saveConstraint(this.levelId, $event).subscribe(
      value => {
        timer(300).subscribe(x => {
          this.loadLevel();
        });
      }, error => {
        timer(300).subscribe(x => {
          this.loading = false;
          this.unknownError();
        });
      }
    );
  }

  onCreateRegex($event: {dto: RegexCreateDto, constraintId: string}): void {
    this.loading = true;
    this.levelsService.saveRegex(this.levelId, $event.constraintId, $event.dto, null).subscribe(
      value => {
        timer(300).subscribe(x => {
          this.loadLevel();
        });
      }, error => {
        timer(300).subscribe(x => {
          this.loading = false;
          this.unknownError();
        });
      }
    );
  }

  onClickRegexTestModal(): void {
    const dialogRef = this.dialog.open(RegexPlaygroundComponent, {
      height: '400px',
      width: '600px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('close dialog');
    });
  }
}
