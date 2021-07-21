import {Tile} from './tile';
import {TileType} from '../../../dtos/sse/game-event-dto';


export class NullTile extends Tile {

  constructor() {
    super(TileType.NULL, {x : -1, y : -1}, [], false);
  }
}
