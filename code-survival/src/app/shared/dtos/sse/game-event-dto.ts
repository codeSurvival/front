export enum ActionType {
  WALK = 'WALK',
  TRIPPED = 'TRIPPED',
}

export enum Direction {
  UP = 'UP', DOWN = 'DOWN', LEFT = 'LEFT', RIGHT = 'RIGHT',
}

export interface MobAction {
  type: ActionType;
  target?: Direction;
}


export interface GameEventDTO {
  world: WorldDTO;
  action: MobAction;
  gameover: boolean;
  gameLoss: boolean;
}

export interface WorldDTO {
  mobDTO: MobDTO;
  grid: GridDTO;
  round: number;
}

export interface GridDTO {
  tiles: TileDTO[];
}

export interface TileDTO {
  coordonates: Coordonates;
  contanumber: TileContaint[];
  type: TileType;
}

export enum TileContaint {
  MEAL = 'MEAL',
}

export enum TileType {
  GRASS = 'GRASS',
  PIT = 'PIT',
}

interface Coordonates {
  x: number;
  y: number;
}


interface MobDTO {
  mobState: MobStateDTO;
}

interface MobStateDTO {
  health: number;
  position: CoordinatesDTO;
}

interface CoordinatesDTO {
  x: number;
  y: number;
}
