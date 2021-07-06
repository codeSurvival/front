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
  gridSize: number;
}

export interface TileDTO {
  coordinates: Coordinates;
  containt: TileContaint[];
  type: TileType;
}

export enum TileContaint {
  MEAL = 'MEAL',
}

export enum TileType {
  GRASS = 'GRASS',
  PIT = 'PIT',
  NULL = 'NULL',
}

export interface Coordinates {
  x: number;
  y: number;
}


export interface MobDTO {
  mobState: MobStateDTO;
}

export interface MobStateDTO {
  health: number;
  position: CoordinatesDTO;
}

export interface CoordinatesDTO {
  x: number;
  y: number;
}
