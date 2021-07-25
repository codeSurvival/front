import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface ErrorDialogData {
  type: string;
  message: string;
}

@Component({
  selector: 'app-game-error',
  templateUrl: './game-error.component.html',
  styleUrls: ['./game-error.component.scss']
})
export class GameErrorComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: ErrorDialogData) {}

  ngOnInit(): void {
  }

}
