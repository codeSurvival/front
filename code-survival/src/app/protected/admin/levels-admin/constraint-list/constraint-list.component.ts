import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Constraint} from '../../../../shared/models/levels/constraint';
import {LanguageResponse} from '../../../../shared/models/languages/language-response';
import {RegexCreateDto} from '../../../../shared/dtos/levels/regex-create-dto';

@Component({
  selector: 'app-constraint-list',
  templateUrl: './constraint-list.component.html',
  styleUrls: ['./constraint-list.component.scss']
})
export class ConstraintListComponent implements OnInit {

  @Output()
  createConstraint = new EventEmitter<Constraint>();


  @Output()
  createRegex = new EventEmitter<{ dto: RegexCreateDto, constraintId: string}>();

  @Input()
  levelId!: number;

  @Input()
  constraintList!: Constraint[];

  @Input()
  languagesList!: LanguageResponse[];

  constructor() { }

  ngOnInit(): void {
  }

  onCreate($event: Constraint): void {
    this.createConstraint.emit($event);
  }

  onCreateRegex($event: { dto: RegexCreateDto, constraintId: string}): void {
    this.createRegex.emit($event);
  }

}
