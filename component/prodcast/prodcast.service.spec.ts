import { TestBed } from '@angular/core/testing';

import { ProdcastService } from './prodcast.service';

describe('ProdcastService', () => {
  let service: ProdcastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdcastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
