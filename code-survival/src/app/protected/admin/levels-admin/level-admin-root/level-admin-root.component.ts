import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LevelsService} from '../../../../core/services/levels.service';
import {Level} from '../../../../shared/models/levels/level';
import {HttpErrorResponse} from '@angular/common/http';
import {Constraint} from '../../../../shared/models/levels/constraint';
import {LanguageService} from '../../../../core/services/http/language.service';
import {LanguageResponse} from '../../../../shared/models/languages/language-response';
import Swal from 'sweetalert2';

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

  constructor(private route: ActivatedRoute,
              private router: Router,
              private levelsService: LevelsService,
              private languageService: LanguageService)
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

    this.levelsService.getLevel(this.levelId).subscribe(async (value) => {
      this.level = value;
      this.constraints = this.level.constraints;

      console.log(this.level);
    }, (err: HttpErrorResponse) => {
      if (err.status === 409) {
        this.router.navigate(['/admin/levels']);
      }
    });

    this.languageService.getLanguages().subscribe( async (value) => {
      this.languages = value;
    }, (err: HttpErrorResponse) => {

        this.unknownError();
    });

    console.log('in level edit' + this.levelId);

    console.log(this.level);
  }

  private unknownError(): void {
    Swal.fire({
      text: 'Erreur inconnue, veuillez contacter les développeurs',
      icon: 'error'
    });
  }

}
