import { TravelTimePipe } from './travel-time.pipe';

describe('TravelTimePipe', () => {
  let pipe: TravelTimePipe;
  beforeEach(() => {
    pipe = new TravelTimePipe();
  })
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should equal 60s', () => {
    expect(pipe.transform(60)).toBe('0d 0h 1m 0s');
  })
});
