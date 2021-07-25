import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';


interface MessageDialogData {
  message: string;
}

@Component({
  selector: 'app-game-message',
  templateUrl: './game-message.component.html',
  styleUrls: ['./game-message.component.scss']
})
export class GameMessageComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: MessageDialogData) {}

  ngOnInit(): void {
  }

}
