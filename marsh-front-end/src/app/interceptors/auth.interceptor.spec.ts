import {TestBed} from '@angular/core/testing';

import {AuthInterceptor} from './auth.interceptor';
import {Router} from '@angular/router';

describe('AuthInterceptor', () => {

  const mockRouter = {
    url: '/current-url',
    navigate: jasmine.createSpy('mockRouter.navigate')
  };

  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AuthInterceptor,
      {provide: Router, useValue: mockRouter}
    ]
  }));

  it('should be created', () => {
    const interceptor: AuthInterceptor = TestBed.inject(AuthInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
