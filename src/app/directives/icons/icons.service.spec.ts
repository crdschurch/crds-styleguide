import { IconService } from './icons.service';

describe('Service: IconService', () => {

  it('provides an array of icons', () => {
    let service = new IconService();
    let icons = [
      'calendar',
      'check-circle',
      'chevron-left',
      'chevron-right',
      'circle-thin',
      'contrast',
      'facebook',
      'github',
      'twitter',
      'instagram',
      'usd',
      'youtube'
    ];
    expect(service.icons).toEqual(icons);
  });

});
