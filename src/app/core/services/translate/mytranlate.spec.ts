import { TestBed } from '@angular/core/testing';

import { Mytranlate } from './mytranlate';

describe('Mytranlate', () => {
  let service: Mytranlate;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Mytranlate);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
