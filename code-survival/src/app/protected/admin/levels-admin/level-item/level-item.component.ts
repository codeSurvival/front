import {Component, Input, OnInit} from '@angular/core';
import {LightLevel} from '../../../../shared/models/levels/light-level';
import {FormControl, Validators} from '@angular/forms';
import {LevelsService} from '../../../../core/services/levels.service';
import {UserEdit} from '../../../../shared/models/users/user-edit';
import {HttpErrorResponse} from '@angular/common/http';
import Swal from 'sweetalert2';
import {timer} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-level-item',
  templateUrl: './level-item.component.html',
  styleUrls: ['./level-item.component.scss']
})
export class LevelItemComponent implements OnInit {
  turnObjectiveFormControl = new FormControl('', [
    Validators.required,
    Validators.min(1),
  ]);

  @Input()
  level!: LightLevel;
  loading = false;

  constructor(private levelsService: LevelsService, private router: Router) { }

  ngOnInit(): void {
  }

  onSaveClick(level: LightLevel): void {
    this.loading = true;
    this.levelsService.update(level).subscribe(
      value => {
        timer(300).subscribe(x => {
          this.loading = false;
        });
      }, error => {
        timer(300).subscribe(x => {
          this.loading = false;
          this.unknownError();
        });
      }
    );

  }

  private unknownError(): void {
    Swal.fire({
      text: 'Erreur inconnue, veuillez contacter les développeurs',
      icon: 'error'
    });
  }

  onInspect(level: LightLevel): void {
    this.router.navigate(['/admin/levels/' + level.ordinalValue]);
  }
}
