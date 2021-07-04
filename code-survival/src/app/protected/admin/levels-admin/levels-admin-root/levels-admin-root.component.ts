import { Component, OnInit } from '@angular/core';
import {LightLevel} from '../../../../shared/models/levels/light-level';
import {LevelsService} from '../../../../core/services/levels.service';

@Component({
  selector: 'app-levels-admin-root',
  templateUrl: './levels-admin-root.component.html',
  styleUrls: ['./levels-admin-root.component.scss']
})
export class LevelsAdminRootComponent implements OnInit {
  levels: LightLevel[] = [];

  loading = false;

  constructor(private levelsService: LevelsService) { }

  ngOnInit(): void {
    console.log('in admin level');
    this.loadLevels();
  }

  onUpdate($event: boolean): void {
    this.loadLevels();
  }

  loadLevels(): void {
    this.loading = true;
    this.levelsService.getLevels().subscribe( async (value) => {
      this.levels = value.sort( (a, b) => a.ordinalValue - b.ordinalValue );
      console.log(this.levels);
      this.loading = false;
    });
  }

}
