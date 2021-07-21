export enum ActionType {
  WALK = 'WALK',
  TRIPPED = 'TRIPPED',
  JUMP = 'JUMP',
  SCOUT = 'SCOUT',
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
  coordinates: CoordinatesDTO;
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
  TREE = 'TREE',
}


export interface MobDTO {
  mobState: MobStateDTO;
}

export interface MobStateDTO {
  needs: {BLOOD: number, HUNGER: number};
  position: CoordinatesDTO;
  memoryTile: TileDTO[];
  memory: Map<string, string>;
}

export enum MobNeeds {
  BLOOD = 'BLOOD',
  HUNGER = 'HUNGER',
}

export interface CoordinatesDTO {
  x: number;
  y: number;
}
