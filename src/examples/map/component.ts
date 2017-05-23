import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styles: [`
    .sebm-google-map-container {
       height: 300px;
     }
  `],
  templateUrl: './component.html'
})
export class AppComponent {

  // google maps zoom level
  zoom = 8;

  // initial center position for the map
  lat = 39.159398;
  lng = -84.423367;

  disableDefaultUi = false;
  zoomControl = true;

  // markers: marker[] = [
  markers = <any> [
    {
      lat: this.lat + 0.3,
      lng: this.lng + 0.3,
      label: 'A',
      draggable: false
    },
    {
      lat: this.lat - 0.3,
      lng: this.lng - 0.3,
      label: 'B',
      draggable: false
    },
    {
      lat: this.lat - 0.45,
      lng: this.lng - 0.45,
      label: 'C',
      draggable: false
    }
  ]

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
}
