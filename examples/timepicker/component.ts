import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <timepicker [(ngModel)]="mytime"></timepicker>
    <p class="soft-half-left">Time is: {{mytime}}</p>
  `
})
export class AppComponent implements OnInit {

  public mytime: Date = new Date();

  ngOnInit() {
    let date = new Date();
    date.setHours(19);
    date.setMinutes(0);
    this.mytime = date;
  }
};
