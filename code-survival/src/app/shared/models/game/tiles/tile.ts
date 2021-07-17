import {Coordinates, TileContaint, TileDTO, TileType} from '../../../dtos/sse/game-event-dto';

const tileTypeAsciiDictionary = {
  [TileType.GRASS]: 'v',
  [TileType.NULL]: '\\',
  [TileType.PIT]: '_',
};

const tileContaintAsciiDictionary = {
  [TileContaint.MEAL]: 'o',
};

export class Tile {
  coordinates: Coordinates;
  containt: TileContaint[];
  type: TileType;
  asciiRepresentation: string;

  static from(tileDTO: TileDTO): Tile {
    return new Tile(tileDTO.type, tileDTO.coordinates, tileDTO.containt);
  }

  constructor(tileType: TileType, coordinates: Coordinates, containt: TileContaint[]) {
    this.type = tileType;
    this.containt = containt;
    this.coordinates = coordinates;
    this.asciiRepresentation = this.buildAsciiRepresentation(tileType, containt);
  }

  buildAsciiRepresentation(type: TileType, containt: TileContaint[]): string {
    let result = tileTypeAsciiDictionary[type];
    result += containt.length ? tileContaintAsciiDictionary[containt[0]] : tileTypeAsciiDictionary[type];
    result += tileTypeAsciiDictionary[type];

    return result;
  }
}
