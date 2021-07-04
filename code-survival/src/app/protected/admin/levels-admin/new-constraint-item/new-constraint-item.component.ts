import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Constraint} from '../../../../shared/models/levels/constraint';

@Component({
  selector: 'app-new-constraint-item',
  templateUrl: './new-constraint-item.component.html',
  styleUrls: ['./new-constraint-item.component.scss']
})
export class NewConstraintItemComponent implements OnInit {

  name = '';
  warning = '';

  constraintNameFormControl = new FormControl('', [
    Validators.required,
    Validators.min(4), Validators.max(20)
  ]);

  constraintWarningFormControl = new FormControl('', [
    Validators.required,
    Validators.min(10), Validators.max(100)
  ]);
  loading = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSaveClick(): void {
    console.log('create');
  }

}
