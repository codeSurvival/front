import { Injectable } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {CanActivate, Router} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(public auth: AuthenticationService, public router: Router) {
  }

  canActivate(): Observable<boolean> {
    return new Observable<boolean>(obs => this.auth.isAuthenticated().subscribe((auth) => {
      if (auth) {
        return obs.next(true);
      }
      this.router.navigateByUrl('/login');
      return obs.next(false);
    }));
  }
}
