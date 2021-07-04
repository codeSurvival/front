import {Component, Input, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {LightLevel} from '../../../../shared/models/levels/light-level';
import {LevelsService} from '../../../../core/services/levels.service';
import {timer} from 'rxjs';
import Swal from 'sweetalert2';
import {LevelCreateDto} from '../../../../shared/dtos/levels/level-create-dto';

@Component({
  selector: 'app-new-level-item',
  templateUrl: './new-level-item.component.html',
  styleUrls: ['./new-level-item.component.scss']
})
export class NewLevelItemComponent implements OnInit {

  turnObjectiveFormControl = new FormControl('', [
    Validators.required,
    Validators.min(1),
  ]);

  loading = false;

  turnObjective: number = 10;

  constructor(private levelsService: LevelsService) {
  }

  ngOnInit(): void {
  }

  onSaveClick(): void {
    this.loading = true;
    const levelCreateDto = new LevelCreateDto(this.turnObjective);
    this.levelsService.save(levelCreateDto).subscribe(
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

}
