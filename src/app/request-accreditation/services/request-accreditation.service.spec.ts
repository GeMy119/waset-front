import { TestBed } from '@angular/core/testing';

import { RequestAccreditationService } from './request-accreditation.service';

describe('RequestAccreditationService', () => {
  let service: RequestAccreditationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestAccreditationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
