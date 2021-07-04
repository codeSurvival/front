import {Component, Input, OnInit} from '@angular/core';
import {Constraint} from '../../../../shared/models/levels/constraint';
import {LanguageResponse} from '../../../../shared/models/languages/language-response';

@Component({
  selector: 'app-constraint-list',
  templateUrl: './constraint-list.component.html',
  styleUrls: ['./constraint-list.component.scss']
})
export class ConstraintListComponent implements OnInit {

  @Input()
  constraintList!: Constraint[];

  @Input()
  languagesList!: LanguageResponse[];

  constructor() { }

  ngOnInit(): void {
  }

}
