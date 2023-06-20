import { TestBed } from '@angular/core/testing';

import { InServicePetsService } from './in-service-pets.service';

describe('InServicePetsService', () => {
  let service: InServicePetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InServicePetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
