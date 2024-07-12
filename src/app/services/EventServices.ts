import { Subject } from 'rxjs';

class EventService {
  private subject = new Subject();

  emit(eventName: string, payload: any) {
    this.subject.next({ eventName, payload });
  }

  listen(eventName: string, callback: (event: any) => void) {
    this.subject.asObservable().subscribe((nextObjEvent: any) => {
      if (nextObjEvent.eventName === eventName) {
        callback(nextObjEvent.payload);
      }
    });
  }
}

export default new EventService();
