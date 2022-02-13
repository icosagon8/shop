import { TestBed } from '@angular/core/testing';

import { ProductResolveGuard } from './product-resolve.guard';

describe('ProductResolveGuard', () => {
  let guard: ProductResolveGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProductResolveGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
