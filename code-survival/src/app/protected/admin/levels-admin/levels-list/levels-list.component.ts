import {Component, Input, OnInit} from '@angular/core';
import {LightLevel} from '../../../../shared/models/levels/light-level';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-levels-list',
  templateUrl: './levels-list.component.html',
  styleUrls: ['./levels-list.component.scss']
})
export class LevelsListComponent implements OnInit {



  @Input()
  levelsList: LightLevel[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
