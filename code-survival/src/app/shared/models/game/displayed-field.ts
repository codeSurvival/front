import {Coordinates, GridDTO, MobStateDTO} from '../../dtos/sse/game-event-dto';
import {NullTile} from './tiles/null-tile';
import {Tile} from './tiles/tile';


export type TileRow = [Tile, Tile, Tile, Tile, Tile] | Tile[];

export class DisplayedField {

  rows: [TileRow, TileRow, TileRow, TileRow, TileRow];
  private ROW_SIZE = 5;
  //
  // static isInBound(coordinates: Coordinates, grid: GridDTO): boolean {
  //   return !(coordinates.x < 0
  //     || coordinates.y < 0
  //     || coordinates.y > grid.gridSize
  //     || coordinates.x > grid.gridSize);
  // }

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

  private getTile(grid: GridDTO, coordinates: Coordinates): Tile {
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
