import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LightLevel} from '../../../../shared/models/levels/light-level';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-levels-list',
  templateUrl: './levels-list.component.html',
  styleUrls: ['./levels-list.component.scss']
})
export class LevelsListComponent implements OnInit {


  @Output()
  update = new EventEmitter<boolean>();


  @Input()
  levelsList: LightLevel[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onUpdate($event: boolean): void {
    this.update.emit($event);
  }
}
