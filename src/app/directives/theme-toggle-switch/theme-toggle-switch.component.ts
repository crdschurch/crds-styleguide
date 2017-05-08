import { Component, EventEmitter, Input, Output  } from '@angular/core';

@Component({
  selector: 'theme-toggle-switch',
  template: `
    <a class="theme-toggle-switch" (click)="onSwitch()">
      <svg class="icon icon-1" viewBox="0 0 256 256"><use height="256" width="256" xlink:href="/assets/svgs/icons.svg#contrast"></use></svg>
    </a>
  `
})
export class ThemeToggleSwitchComponent {

  private body;
  private state: String = 'off';
  private selector: String = 'dark-theme';

  @Output() stateChange = new EventEmitter<any>();

  constructor() {
    this.body = document.getElementsByTagName('body')[0];
  }

  onSwitch() {
    this.state = this.state === 'on' ? 'off' : 'on';
    this.stateChange.emit({
      value: this.state
    });
    this.toggleClass();
  }

  toggleClass() {
    if (this.state === 'on') {
      this.body.classList.add(this.selector);
    } else {
      this.body.classList.remove(this.selector);
    }
  }
}
