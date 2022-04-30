import { TestBed } from '@angular/core/testing';

import { AllowCredentialsInterceptor } from './allow-credentials.interceptor';

describe('AllowCredentialsInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AllowCredentialsInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AllowCredentialsInterceptor = TestBed.inject(AllowCredentialsInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
