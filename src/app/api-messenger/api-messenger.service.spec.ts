import { TestBed } from '@angular/core/testing';

import { ApiMessengerService } from './api-messenger.service';

describe('ApiMessengerService', () => {
  let service: ApiMessengerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiMessengerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
