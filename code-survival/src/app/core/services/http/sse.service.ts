import {Injectable, NgZone} from '@angular/core';
import {Observable} from 'rxjs';
import {EventSourcePolyfill, OnMessageEvent} from 'ng-event-source';
import {AuthenticationService} from '../authentication.service';

interface EventMessageSource {
  eventSrc: EventSourcePolyfill;
  eventMsg: OnMessageEvent;
}

@Injectable({
  providedIn: 'root'
})
export class SseService {

  private connections: Map<string, EventSourcePolyfill> = new Map();

  constructor(private zone: NgZone,
              private auth: AuthenticationService,
  ) {
  }

  getServerSentEvent(url: string): Observable<EventMessageSource> {
    return new Observable<EventMessageSource>(observer => {
      const eventSource = this.getEventSource(url);
      eventSource.onmessage = (ev: OnMessageEvent) => {
        this.zone.run(() => observer.next({eventMsg: ev, eventSrc: eventSource}));
      };
      this.connections.set(url, eventSource);
    });
  }

  private getEventSource(url: string): EventSourcePolyfill {
    return new EventSourcePolyfill(url,
      {
        headers: {
          Authorization: `Bearer ${this.auth.getToken()}`,
        }
      }
    );
  }

  clearConnection(url: string): void {
    this.connections.get(url)?.close();
    this.connections.delete(url);
  }
}
