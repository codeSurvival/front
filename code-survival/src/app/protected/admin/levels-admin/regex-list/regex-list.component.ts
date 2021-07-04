import {Component, Input, OnInit} from '@angular/core';
import {Regex} from '../../../../shared/models/levels/regex';
import {LanguageResponse} from '../../../../shared/models/languages/language-response';

@Component({
  selector: 'app-regex-list',
  templateUrl: './regex-list.component.html',
  styleUrls: ['./regex-list.component.scss']
})
export class RegexListComponent implements OnInit {

  @Input()
  regexList!: Regex[];


  @Input()
  languagesList!: LanguageResponse[];

  constructor() { }

  ngOnInit(): void {
  }

}
