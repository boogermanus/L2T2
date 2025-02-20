import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have getBodySelects method', () => {
    expect(service.getBodySelects).toBeDefined();
  });

  it('should return body selects', () => {
    const data = service.getBodySelects();
    expect(data.length).toBe(10);
  });

  it('should have getAccelerations method', () => {
    expect(service.getAccelerations).toBeDefined();
  });

  it('should have at least one acceleration', () => {
    const data = service.getAccelerations();
    expect(data.length).toBeGreaterThan(0);
  })
});
