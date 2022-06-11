import { TestBed } from '@angular/core/testing';

import { LlamadaApiProductsService } from './llamada-api-products.service';

describe('LlamadaApiProductsService', () => {
  let service: LlamadaApiProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LlamadaApiProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
