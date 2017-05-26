import { IconService } from './icons.service';

describe('Service: IconService', () => {

  it('provides an array of icons', () => {
    let service = new IconService();
    expect(typeof(service.icons)).toEqual('object');
    expect(service.icons.length).toBeGreaterThan(0);
    expect(typeof(service.icons[0])).toEqual('string');
  });
});
