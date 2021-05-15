import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthenticationService} from '../../services/authentication.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public auth: AuthenticationService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (AuthenticationService.getToken()) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${AuthenticationService.getToken()}`
        }
      });
    }
    return next.handle(request);
  }
}
