import { TestBed } from '@angular/core/testing';

import { PetShopServicesService } from './pet-shop-services.service';

describe('PetShopServicesService', () => {
  let service: PetShopServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetShopServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
