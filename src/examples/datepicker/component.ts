import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <datepicker [showWeeks]="false"></datepicker>
  `
})
export class AppComponent {}