import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-game-actions',
  templateUrl: './game-actions.component.html',
  styleUrls: ['./game-actions.component.scss']
})
export class GameActionsComponent implements OnInit {

  @Output()
  executeCodeClicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onExecuteCodeClick(): void {
    this.executeCodeClicked.emit();
  }
}
