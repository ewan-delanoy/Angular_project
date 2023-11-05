import { TestBed } from '@angular/core/testing';

import { CacheForUserSelectionService } from './cache-for-user-selection.service';

describe('CacheForUserSelectionService', () => {
  let service: CacheForUserSelectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CacheForUserSelectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
