import {GameEventDTO} from './game-event-dto';
import {CompilationStepDto} from './compilation-step-dto';
import {ErrorDTO} from './error-dto';

export enum SseEmissionType {
  GAME_EVENT = 'GAME_EVENT',
  HEARTBEAT = 'HEARTBEAT',
  COMPILATION_STEP = 'COMPILATION_STEP',
  MESSAGE = 'MESSAGE',
  ERROR = 'ERROR',
}

export type SseEmission = string | GameEventDTO | CompilationStepDto | ErrorDTO;

export interface JacketDTO {
  type: SseEmissionType;
  data: SseEmission;
}
