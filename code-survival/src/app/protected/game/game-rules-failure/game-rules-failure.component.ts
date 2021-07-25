import {Component, Inject, OnInit} from '@angular/core';
import {CodeExecutionResponse} from '../../../shared/models/codes/code-execution-response';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  codeResponse: CodeExecutionResponse;
}

@Component({
  selector: 'app-game-rules-failure',
  templateUrl: './game-rules-failure.component.html',
  styleUrls: ['./game-rules-failure.component.scss']
})
export class GameRulesFailureComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit(): void {
  }

}
