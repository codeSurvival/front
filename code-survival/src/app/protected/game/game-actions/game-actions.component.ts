import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-game-actions',
  templateUrl: './game-actions.component.html',
  styleUrls: ['./game-actions.component.scss']
})
export class GameActionsComponent implements OnInit {

  @Output()
  executeCodeClicked = new EventEmitter();

  @Input()
  isEnabled: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  onExecuteCodeClick(): void {
    this.executeCodeClicked.emit();
  }
}
