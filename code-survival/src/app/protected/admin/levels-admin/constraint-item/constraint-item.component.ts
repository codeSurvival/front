import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Constraint} from '../../../../shared/models/levels/constraint';
import {LightLevel} from '../../../../shared/models/levels/light-level';
import {FormControl, Validators} from '@angular/forms';
import {LanguageResponse} from '../../../../shared/models/languages/language-response';
import {RegexCreateDto} from '../../../../shared/dtos/levels/regex-create-dto';
import {LevelsService} from '../../../../core/services/levels.service';
import {timer} from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-constraint-item',
  templateUrl: './constraint-item.component.html',
  styleUrls: ['./constraint-item.component.scss']
})
export class ConstraintItemComponent implements OnInit {

  constraintNameFormControl = new FormControl('', [
    Validators.required,
    Validators.min(4), Validators.max(20)
  ]);

  constraintWarningFormControl = new FormControl('', [
    Validators.required,
    Validators.min(10), Validators.max(100)
  ]);


  @Output()
  createRegex = new EventEmitter<{dto: RegexCreateDto, constraintId: string}>();


  @Input()
  languagesList!: LanguageResponse[];


  @Input()
  levelId!: number;


  @Input()
  constraint!: Constraint;
  constraintId!: string;
  loading = false;

  constructor(private levelsService: LevelsService) {
  }

  ngOnInit(): void {
    if (this.constraint.id) {
      this.constraintId = this.constraint.id;
    }
  }
  onSaveClick(constraint: Constraint): void {
    this.loading = true;
    this.levelsService.saveConstraint(this.levelId, constraint).subscribe(
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

  onCreateRegex($event: RegexCreateDto): void {
    if (this.constraint.id) {
      this.createRegex.emit({dto: $event, constraintId: this.constraint.id });
    }
  }

  private unknownError(): void {
    Swal.fire({
      text: 'Erreur inconnue, veuillez contacter les développeurs',
      icon: 'error'
    });
  }
}
