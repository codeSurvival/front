import {Constraint} from './constraint';

export class Level {
  constructor(ordinalValue: number, turnObjective: number, constraints: Constraint[]) {
    this.ordinalValue = ordinalValue;
    this.turnObjective = turnObjective;
    this.constraints = constraints;
  }
  ordinalValue: number;
  turnObjective: number;
  constraints: Constraint[];
}
