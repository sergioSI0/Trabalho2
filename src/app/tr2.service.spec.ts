import { TestBed } from '@angular/core/testing';

import { Tr2Service } from './tr2.service';

describe('Tr2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Tr2Service = TestBed.get(Tr2Service);
    expect(service).toBeTruthy();
  });
});
