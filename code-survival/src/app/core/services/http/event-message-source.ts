import {EventSourcePolyfill, OnMessageEvent} from 'ng-event-source';

export interface EventMessageSource {
  eventSrc: EventSourcePolyfill;
  eventMsg: OnMessageEvent;
}
