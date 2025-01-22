import { TestBed } from '@angular/core/testing';

import { ResloveGaurdGuard } from './reslove-gaurd.guard';

describe('ResloveGaurdGuard', () => {
  let guard: ResloveGaurdGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ResloveGaurdGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
