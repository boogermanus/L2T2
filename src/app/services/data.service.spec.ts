import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import { lastValueFrom } from 'rxjs';
import { provideHttpClient } from '@angular/common/http';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient()
      ]
    });
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have getBodySelects method', () => {
    expect(service.getBodySelects).toBeDefined();
  });

  it('should return body selects', async () => {
    const promise = lastValueFrom(service.getBodySelects());
    const data = await promise;
    expect(data.length).toBe(10);
  });

  it('should have getAccelerations method', () => {
    expect(service.getAccelerations).toBeDefined();
  });

  it('should have at least one acceleration', async () => {
    const promise = lastValueFrom(service.getAccelerations());
    const data = await promise;
    expect(data.length).toBeGreaterThan(0);
  });
});
