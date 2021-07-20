import {Component, Inject, OnInit} from '@angular/core';
import {CodeExecutionResponse} from '../../../shared/models/codes/code-execution-response';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {LightConstraint} from '../../../shared/dtos/levels/light-constraint-response';
import {LevelsService} from '../../../core/services/levels.service';
import {LightLevel} from '../../../shared/models/levels/light-level';


export interface DialogData {
  userLevel: number;
}

@Component({
  selector: 'app-active-constraints',
  templateUrl: './active-constraints.component.html',
  styleUrls: ['./active-constraints.component.scss']
})

export class ActiveConstraintsComponent implements OnInit {

  constraints: LightConstraint[] = [];
  level: LightLevel | null = null;
  isLoading = true;

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData,
              private levelsService: LevelsService) {
  }


  ngOnInit(): void {

    this.loadConstraints();
  }

  loadConstraints(): void {
    this.levelsService.getActiveConstraintsByLevelId(this.data.userLevel).subscribe( async (value) => {
      this.constraints = value.constraints;
      this.level = value.level;
      this.isLoading = false;
      console.log(this.constraints);
      console.log(this.level);
    });
  }

}
