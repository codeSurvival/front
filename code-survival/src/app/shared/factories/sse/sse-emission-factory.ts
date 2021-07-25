import {JacketDTO, SseEmission, SseEmissionType} from '../../dtos/sse/jacket-dto';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SseEmissionFactory {
  public get(jacket: JacketDTO): SseEmission {
    switch (jacket.type) {
      case SseEmissionType.GAME_EVENT:
        return JSON.parse(jacket.data.toString());

      case SseEmissionType.COMPILATION_STEP:
        return JSON.parse(jacket.data.toString());
      default:
        return jacket.data;
    }
  }
}
