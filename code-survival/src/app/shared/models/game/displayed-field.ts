import {CoordinatesDTO, GridDTO, MobStateDTO} from '../../dtos/sse/game-event-dto';
import {NullTile} from './tiles/null-tile';
import {Tile} from './tiles/tile';


export type TileRow = [Tile, Tile, Tile, Tile, Tile] | Tile[];

export class DisplayedField {

  rows: [TileRow, TileRow, TileRow, TileRow, TileRow];
  private ROW_SIZE = 5;
  
  constructor(grid: GridDTO, mobState: MobStateDTO) {
    this.rows = [
      this.getRow(mobState.position.y + 2, grid),
      this.getRow(mobState.position.y + 1, grid),
      this.getRow(mobState.position.y, grid),
      this.getRow(mobState.position.y - 1, grid),
      this.getRow(mobState.position.y - 2, grid),
    ];
  }

  private getRow(y: number, grid: GridDTO): TileRow {
    const returnedTiles: TileRow = [];

    for (const x of Array.from(Array(this.ROW_SIZE).keys())) {
      returnedTiles.push(this.getTile(grid, {x, y}));
    }

    return returnedTiles;
  }

  private getTile(grid: GridDTO, coordinates: CoordinatesDTO): Tile {
    const tileToAdd = grid.tiles.filter(tile =>
      (tile.coordinates.x === coordinates.x) &&
      (tile.coordinates.y === coordinates.y)
    )[0];
    if (tileToAdd) {
      return Tile.from(tileToAdd);
    } else {
      return new NullTile();
    }
  }
}
