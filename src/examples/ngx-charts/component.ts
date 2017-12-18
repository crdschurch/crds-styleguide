import { Component } from '@angular/core';

import { data } from './data';

@Component({
  selector: 'my-app',
  templateUrl: './component.html'
})
export class AppComponent {
  data: any[];

  view: any[] = [700, 300];

  colorScheme = 'cool';
  gradient = false;
  showLegend = false;
  showXAxis = true;
  showXAxisLabel = true;
  showYAxis = true;
  showYAxisLabel = true;
  xAxisLabel = 'Population';
  yAxisLabel = 'Country';

  constructor() {
    Object.assign(this, { data });
  }

  onSelect(event) {
    console.log(event);
  }
}
