import {Coordinates, GridDTO, MobStateDTO} from '../../dtos/sse/game-event-dto';
import {NullTile} from './tiles/null-tile';
import {Tile} from './tiles/tile';


export type TileRow = [Tile, Tile, Tile, Tile, Tile];

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
    const returnedTiles: Tile[] = [];

    for (const x of Array.from(Array(this.ROW_SIZE).keys())) {
      returnedTiles.push(this.getTile(grid, {x, y}));
    }

    console.log(returnedTiles);

    return returnedTiles as TileRow;
  }

  private getTile(grid: GridDTO, coordinates: Coordinates): Tile {
    if (this.isInBound(coordinates, grid)) {
      return Tile.from(grid.tiles.filter(tile =>
        (tile.coordinates.x === coordinates.x)
        && (tile.coordinates.y === coordinates.y)
      )[0]);
    }

    return new NullTile();
  }

  private isInBound(coordinates: Coordinates, grid: GridDTO): boolean {
    if (coordinates.x < 0 || coordinates.y < 0
      || coordinates.y > grid.gridSize || coordinates.x > grid.gridSize) {
      return false;
    }
    return true;
  }
}
