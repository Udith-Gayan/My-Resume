import { TestBed } from '@angular/core/testing';

import { VisitorTrackerService } from './visitor-tracker.service';

describe('VisitorTrackerService', () => {
  let service: VisitorTrackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisitorTrackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
