import { TestBed } from '@angular/core/testing';

import { DovizService } from './doviz.service';

describe('DovizService', () => {
  let service: DovizService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DovizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
