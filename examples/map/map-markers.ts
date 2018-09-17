import { mapOptions } from './map-options';

export const mapMarkers: Array<any> = [
  {
    name: 'Marker A',
    description: 'Lorem ipsum dolor sit amet.',
    lat: mapOptions.lat + 0.3,
    lng: mapOptions.lng + 0.3,
    iconUrl: '//crds-cms-uploads.s3.amazonaws.com/connect/PERSON.svg'
  },
  {
    name: 'Marker B',
    description: 'Lorem ipsum dolor sit amet.',
    lat: mapOptions.lat - 0.3,
    lng: mapOptions.lng - 0.3,
    iconUrl: '//crds-cms-uploads.s3.amazonaws.com/connect/GATHERING.svg'
  },
  {
    name: 'Marker C',
    description: 'Lorem ipsum dolor sit amet.',
    lat: mapOptions.lat - 0.45,
    lng: mapOptions.lng - 0.45,
    iconUrl: '//crds-cms-uploads.s3.amazonaws.com/connect/SITE.svg'
  },
  {
    name: 'Marker D',
    description: 'Lorem ipsum dolor sit amet.',
    lat: mapOptions.lat + 0.15,
    lng: mapOptions.lng - 0.25,
    iconUrl: '//crds-cms-uploads.s3.amazonaws.com/connect/ME.svg'
  }
];
