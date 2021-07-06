import {GameEventDTO} from './game-event-dto';

export enum SseEmissionType {
  GAME_EVENT = 'GAME_EVENT',
  HEARTBEAT = 'HEARTBEAT',
}

export type SseEmission = string | GameEventDTO;

export interface JacketDTO {
  type: SseEmissionType;
  data: SseEmission;
}
