import {CoordinatesDTO, TileContaint, TileDTO, TileType} from '../../../dtos/sse/game-event-dto';

const tileTypeAsciiDictionary = {
  [TileType.GRASS]: 'v',
  [TileType.NULL]: '\\',
  [TileType.PIT]: '_',
  [TileType.TREE]: 'T',
};

const TileSpritePaths = {
  GRASS: 'assets/sprites/grass.png',
  GRASSMOB: 'assets/sprites/grassmob.png',
  GRASSFOOD: 'assets/sprites/grassfood.png',
  NULL: 'assets/sprites/cloud.png',
  PIT: 'assets/sprites/pit.png',
  PITMOB: 'assets/sprites/pitmob.png',
  TREE: 'assets/sprites/tree.png',
};

const tileContaintAsciiDictionary = {
  [TileContaint.MEAL]: 'o',
};

export class Tile {
  coordinates: CoordinatesDTO;
  containt: TileContaint[];
  type: TileType;
  asciiRepresentation: string;
  spritePath: string;

  static from(tileDTO: TileDTO, mobTile: boolean): Tile {
    return new Tile(tileDTO.type, tileDTO.coordinates, tileDTO.containt, mobTile);
  }

  constructor(tileType: TileType, coordinates: CoordinatesDTO, containt: TileContaint[], mobTile: boolean) {
    this.type = tileType;
    this.containt = containt;
    this.coordinates = coordinates;
    this.asciiRepresentation = this.buildAsciiRepresentation(tileType, containt);
    this.spritePath = this.buildSpritePath(tileType, containt, mobTile);
  }

  buildAsciiRepresentation(type: TileType, containt: TileContaint[]): string {
    let result = tileTypeAsciiDictionary[type];
    result += containt.length ? tileContaintAsciiDictionary[containt[0]] : tileTypeAsciiDictionary[type];
    result += tileTypeAsciiDictionary[type];

    return result;
  }

  private buildSpritePath(tileType: TileType, containt: TileContaint[], mobTile: boolean): string {

    if (tileType === TileType.TREE) {
      return TileSpritePaths.TREE;
    }
    if (tileType === TileType.PIT) {
      if (mobTile) {
        return TileSpritePaths.PITMOB;
      }

      return TileSpritePaths.PIT;
    }

    if (tileType === TileType.GRASS) {
      if (mobTile) {
        return TileSpritePaths.GRASSMOB;
      }

      if (containt[0] === TileContaint.MEAL) {
        return TileSpritePaths.GRASSFOOD;
      }

      return TileSpritePaths.GRASS;
    }

    return TileSpritePaths.NULL;
  }
}
