import { Component } from '@angular/core';

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

  // google maps zoom level
  zoom = 8;

  // initial center position for the map
  lat = 39.159398;
  lng = -84.423367;

  disableDefaultUi = false;
  zoomControl = true;

  streetViewControl = false;
  scrollwheel = false;

  styles = [
    {
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#f5f5f5'
        }
      ]
    },
    {
      'elementType': 'labels.icon',
      'stylers': [
        {
          'visibility': 'off'
        }
      ]
    },
    {
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#616161'
        }
      ]
    },
    {
      'elementType': 'labels.text.stroke',
      'stylers': [
        {
          'color': '#f5f5f5'
        }
      ]
    },
    {
      'featureType': 'administrative.land_parcel',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#bdbdbd'
        }
      ]
    },
    {
      'featureType': 'administrative.province',
      'elementType': 'geometry.stroke',
      'stylers': [
        {
          'color': '#979797'
        },
        {
          'weight': 1
        }
      ]
    },
    {
      'featureType': 'poi',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#eeeeee'
        }
      ]
    },
    {
      'featureType': 'poi',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#757575'
        }
      ]
    },
    {
      'featureType': 'poi.park',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#e5e5e5'
        }
      ]
    },
    {
      'featureType': 'poi.park',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#9e9e9e'
        }
      ]
    },
    {
      'featureType': 'road',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#ffffff'
        }
      ]
    },
    {
      'featureType': 'road.arterial',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#757575'
        }
      ]
    },
    {
      'featureType': 'road.highway',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#dadada'
        }
      ]
    },
    {
      'featureType': 'road.highway',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#616161'
        }
      ]
    },
    {
      'featureType': 'road.local',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#9e9e9e'
        }
      ]
    },
    {
      'featureType': 'transit.line',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#e5e5e5'
        }
      ]
    },
    {
      'featureType': 'transit.station',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#eeeeee'
        }
      ]
    },
    {
      'featureType': 'water',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#c9c9c9'
        }
      ]
    },
    {
      'featureType': 'water',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#9e9e9e'
        }
      ]
    }
  ];

  // NOTE: Cluster icon available at: //crds-cms-uploads.s3.amazonaws.com/connect/CLUSTER.svg

  // markers: marker[] = [
  markers = <any> [
    {
      name: 'Marker A',
      description: 'Lorem ipsum dolor sit amet.',
      lat: this.lat + 0.3,
      lng: this.lng + 0.3,
      iconUrl: '//crds-cms-uploads.s3.amazonaws.com/connect/PERSON.svg'
    },
    {
      name: 'Marker B',
      description: 'Lorem ipsum dolor sit amet.',
      lat: this.lat - 0.3,
      lng: this.lng - 0.3,
      iconUrl: '//crds-cms-uploads.s3.amazonaws.com/connect/GATHERING.svg'
    },
    {
      name: 'Marker C',
      description: 'Lorem ipsum dolor sit amet.',
      lat: this.lat - 0.45,
      lng: this.lng - 0.45,
      iconUrl: '//crds-cms-uploads.s3.amazonaws.com/connect/SITE.svg'
    },
    {
      name: 'Marker D',
      description: 'Lorem ipsum dolor sit amet.',
      lat: this.lat + 0.15,
      lng: this.lng - 0.25,
      iconUrl: '//crds-cms-uploads.s3.amazonaws.com/connect/ME.svg'
    }
  ];

}

