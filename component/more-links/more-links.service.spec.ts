import { TestBed } from '@angular/core/testing';

import { MoreLinksService } from './more-links.service';

describe('MoreLinksService', () => {
  let service: MoreLinksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoreLinksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
