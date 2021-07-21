import {GameEventDTO} from './game-event-dto';
import {CompilationStepDto} from './compilation-step-dto';

export enum SseEmissionType {
  GAME_EVENT = 'GAME_EVENT',
  HEARTBEAT = 'HEARTBEAT',
  COMPILATION_STEP = 'COMPILATION_STEP',
}

export type SseEmission = string | GameEventDTO | CompilationStepDto;

export interface JacketDTO {
  type: SseEmissionType;
  data: SseEmission;
}
