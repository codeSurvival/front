import {Injectable} from '@angular/core';
import {SseService} from './http/sse.service';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {EventMessageSource} from './http/event-message-source';

@Injectable({
  providedIn: 'root'
})
export class GameEventService {

  private servicesUrl = environment.services_url;


  constructor(private sseService: SseService,
              private http: HttpClient) { }

  subscribeToSSE(): Observable<EventMessageSource> {
    return this.sseService.getServerSentEvent(`${this.servicesUrl}/gameEvents`);
  }

  clearGameEventSubscription(): void {
    this.sseService.clearConnection(`${this.servicesUrl}/gameEvents`);
  }
}
