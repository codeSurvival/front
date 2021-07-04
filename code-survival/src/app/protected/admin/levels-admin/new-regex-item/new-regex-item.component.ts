import {Component, Input, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Regex} from '../../../../shared/models/levels/regex';
import {LanguageResponse} from '../../../../shared/models/languages/language-response';

@Component({
  selector: 'app-new-regex-item',
  templateUrl: './new-regex-item.component.html',
  styleUrls: ['./new-regex-item.component.scss']
})
export class NewRegexItemComponent implements OnInit {
  loading = false;

  pattern = '';


  @Input()
  languagesList!: LanguageResponse[];

  regexPatternFormControl = new FormControl('', [
    Validators.required,
    Validators.min(4), Validators.max(20)
  ]);

  languageId!: string;

  constructor() {
  }

  ngOnInit(): void {
    const language = this.languagesList[0];
    this.languageId = language.id;
  }


  onSaveClick(): void {
    console.log(this.languageId);
  }

}
