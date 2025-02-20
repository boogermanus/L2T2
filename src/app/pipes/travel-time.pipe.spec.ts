import { TravelTimePipe } from './travel-time.pipe';

describe('TravelTimePipe', () => {
  it('create an instance', () => {
    const pipe = new TravelTimePipe();
    expect(pipe).toBeTruthy();
  });

  it('should equal 60s', () => {
    const pipe = new TravelTimePipe();
    expect(pipe.transform(60)).toBe('0d 0h 1m 0s');
  })
});
