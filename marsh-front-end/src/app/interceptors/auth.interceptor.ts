import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from "@angular/router";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router: Router) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const jwtToken = localStorage.getItem('jwt_token');
    if (jwtToken) {
      const cloned = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${jwtToken}`)
      });
      return next.handle(cloned)
    } else {
      // this.router.navigate(['login']);
    }
    return next.handle(request);
  }
}
