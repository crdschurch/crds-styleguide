import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ThemeToggleSwitchService {

  public currentState: String = 'off';
  public themeClass: String = 'light-theme';

  private state = new Subject<any>();

  toggleState() {
    this.currentState = this.currentState === 'on' ? 'off' : 'on';
    this.themeClass = this.currentState === 'on' ? 'dark-theme' : 'light-theme';
    this.state.next(this.currentState);
  }

  getState(): Observable<any> {
    return this.state.asObservable();
  }
}
