import {CoordinatesDTO, GridDTO, MobStateDTO} from '../../dtos/sse/game-event-dto';
import {NullTile} from './tiles/null-tile';
import {Tile} from './tiles/tile';


export type TileRow = [Tile, Tile, Tile, Tile, Tile] | Tile[];

export class DisplayedField {

  rows: [TileRow, TileRow, TileRow, TileRow, TileRow];
  private ROW_SIZE = 5;
  private ROW_CENTER = 2;

  constructor(grid: GridDTO, mobState: MobStateDTO) {
    this.rows = [
      this.getRow(mobState.position.y + 2, grid),
      this.getRow(mobState.position.y + 1, grid),
      this.getRow(mobState.position.y, grid, true),
      this.getRow(mobState.position.y - 1, grid),
      this.getRow(mobState.position.y - 2, grid),
    ];
  }

  private getRow(y: number, grid: GridDTO, isMobRow: boolean = false): TileRow {
    const returnedTiles: TileRow = [];

    for (const x of Array.from(Array(this.ROW_SIZE).keys())) {
      const isMobTile = isMobRow && x === this.ROW_CENTER;
      returnedTiles.push(this.getTile(grid, {x, y}, isMobTile));
    }

    return returnedTiles;
  }

  private getTile(grid: GridDTO, coordinates: CoordinatesDTO, isMobTile: boolean = false): Tile {
    const tileToAdd = grid.tiles.filter(tile =>
      (tile.coordinates.x === coordinates.x) &&
      (tile.coordinates.y === coordinates.y)
    )[0];
    if (tileToAdd) {
      return Tile.from(tileToAdd, isMobTile);
    } else {
      return new NullTile();
    }
  }
}
