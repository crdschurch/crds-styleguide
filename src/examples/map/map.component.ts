import { Component } from '@angular/core';

@Component({
  selector: 'app-map',
  styles: [`
    .sebm-google-map-container {
       height: 300px;
     }
  `],
  templateUrl: './map.component.html'
})
export class MapComponent {

  // google maps zoom level
  zoom = 8;

  // initial center position for the map
  lat = 39.159398;
  lng = -84.423367;

  disableDefaultUi = false;
  zoomControl = true;

  // NOTE: Cluster icon available at: //crds-cms-uploads.s3.amazonaws.com/connect/CLUSTER.svg

  // markers: marker[] = [
  markers = <any> [
    {
      name: 'person',
      lat: this.lat + 0.3,
      lng: this.lng + 0.3,
      iconUrl: '//crds-cms-uploads.s3.amazonaws.com/connect/PERSON.svg'
    },
    {
      name: 'gathering',
      lat: this.lat - 0.3,
      lng: this.lng - 0.3,
      iconUrl: '//crds-cms-uploads.s3.amazonaws.com/connect/GATHERING.svg'
    },
    {
      name: 'site',
      lat: this.lat - 0.45,
      lng: this.lng - 0.45,
      iconUrl: '//crds-cms-uploads.s3.amazonaws.com/connect/SITE.svg'
    },
    {
      name: 'me',
      lat: this.lat + 0.15,
      lng: this.lng - 0.25,
      iconUrl: '//crds-cms-uploads.s3.amazonaws.com/connect/ME.svg'
    }
  ];

}
