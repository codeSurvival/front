import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Regex} from '../../../../shared/models/levels/regex';
import {LanguageResponse} from '../../../../shared/models/languages/language-response';
import {RegexCreateDto} from '../../../../shared/dtos/levels/regex-create-dto';

@Component({
  selector: 'app-regex-list',
  templateUrl: './regex-list.component.html',
  styleUrls: ['./regex-list.component.scss']
})
export class RegexListComponent implements OnInit {

  @Input()
  regexList!: Regex[];

  @Input()
  levelId!: number;

  @Input()
  constraintId!: string;

  @Output()
  create = new EventEmitter<RegexCreateDto>();


  @Input()
  languagesList!: LanguageResponse[];

  constructor() { }

  ngOnInit(): void {
  }

  onCreate($event: RegexCreateDto): void {
    this.create.emit($event);
  }
}
