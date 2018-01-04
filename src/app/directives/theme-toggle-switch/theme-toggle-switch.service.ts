import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ThemeToggleSwitchService {

  private state = new Subject<any>();

  toggleState(value: String) {
    this.state.next(value);
  }

  getState(): Observable<any> {
    return this.state.asObservable();
  }
}
