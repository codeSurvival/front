import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogData} from '../../../game/game-rules-failure/game-rules-failure.component';
import {AuthenticationService} from '../../../../core/services/authentication.service';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-regex-playground',
  templateUrl: './regex-playground.component.html',
  styleUrls: ['./regex-playground.component.scss']
})
export class RegexPlaygroundComponent implements OnInit {
  code: string = '';
  regex: string = '';
  regexControl: FormControl;
  codeControl: FormControl;
  localeRegex: string = '';
  localeCode: string = '';
  regexForm!: FormGroup;
  regexMatches: string[] = [];
  match: string = 'neutral';

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData, private fb: FormBuilder) {

    this.regexControl = this.fb.control(this.localeRegex);
    this.codeControl = this.fb.control(this.localeCode);
    this.regexForm = this.fb.group(
      {
        regex: this.regexControl,
        code: this.codeControl
      }
    );
  }

  ngOnInit(): void {
  }

  codeChange(): void {
    console.log('code change');
  }

  onTestRegex(): void {
    const regex = new RegExp(this.regexControl.value);
    this.match = regex.test(this.codeControl.value) ? 'match' : 'nomatch';
  }

  onResetRegex(): void {
    this.match = 'neutral';
    this.regexForm.reset({
      regex: '',
      code : ''
    });
  }
}
