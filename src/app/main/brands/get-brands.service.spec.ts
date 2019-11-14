import { TestBed } from '@angular/core/testing';

import { GetBrandsService } from './get-brands.service';

describe('GetBrandsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetBrandsService = TestBed.get(GetBrandsService);
    expect(service).toBeTruthy();
  });
});
