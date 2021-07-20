import {LightLevel} from '../../models/levels/light-level';

export class LevelConstraintsResponse {
  level: LightLevel;
  constraints: LightConstraint[];

  constructor(lightLevel: LightLevel, constraints: LightConstraint[]) {
    this.level = lightLevel;
    this.constraints = constraints;
  }
}

export class LightConstraint {
  id: string;
  name: string;
  warning: string;

  constructor(id: string, name: string, warning: string) {
    this.id = id;
    this.name = name;
    this.warning = warning;
  }
}
