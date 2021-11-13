import { TestBed } from '@angular/core/testing';

import { UserlimitService } from './userlimit.service';

describe('UserlimitService', () => {
  let service: UserlimitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserlimitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
