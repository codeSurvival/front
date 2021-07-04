import {Component, Input, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Regex} from '../../../../shared/models/levels/regex';
import {Constraint} from '../../../../shared/models/levels/constraint';
import {LanguageResponse} from '../../../../shared/models/languages/language-response';

@Component({
  selector: 'app-regex-item',
  templateUrl: './regex-item.component.html',
  styleUrls: ['./regex-item.component.scss']
})
export class RegexItemComponent implements OnInit {


  @Input()
  languagesList!: LanguageResponse[];

  @Input()
  regex!: Regex;

  loading = false;

  regexPatternFormControl = new FormControl('', [
    Validators.required,
    Validators.min(4), Validators.max(20)
  ]);

  constructor() { }

  ngOnInit(): void {
  }

  onSaveClick(regex: Regex): void {
    console.log(regex);
  }

}
