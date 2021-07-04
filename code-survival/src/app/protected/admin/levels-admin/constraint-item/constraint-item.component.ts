import {Component, Input, OnInit} from '@angular/core';
import {Constraint} from '../../../../shared/models/levels/constraint';
import {LightLevel} from '../../../../shared/models/levels/light-level';
import {FormControl, Validators} from '@angular/forms';
import {LanguageResponse} from '../../../../shared/models/languages/language-response';

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


  @Input()
  languagesList!: LanguageResponse[];


  @Input()
  constraint!: Constraint;
  loading = false;

  constructor() { }

  ngOnInit(): void {


  }
  onSaveClick(constraint: Constraint): void {
    console.log(constraint);
  }

}
