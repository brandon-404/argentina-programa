import { TestBed } from '@angular/core/testing';

import { CrudGuardGuard } from './crud-guard.guard';

describe('CrudGuardGuard', () => {
  let guard: CrudGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CrudGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
