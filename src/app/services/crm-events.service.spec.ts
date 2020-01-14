import { TestBed } from '@angular/core/testing';

import { CrmEventsService } from './crm-events.service';

describe('CrmEventsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrmEventsService = TestBed.get(CrmEventsService);
    expect(service).toBeTruthy();
  });
});
