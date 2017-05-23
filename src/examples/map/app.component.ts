import { Component } from '@angular/core';

import { mapOptions } from './map-options';
import { mapMarkers } from './map-markers';

@Component({
  selector: 'app-root',
  styles: [`
    .sebm-google-map-container {
       height: 300px;
     }
  `],
  templateUrl: './app.component.html'
})
export class AppComponent {

  public options = mapOptions;
  public markers = mapMarkers;

}
