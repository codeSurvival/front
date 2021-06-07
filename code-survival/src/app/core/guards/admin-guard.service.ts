import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate{

  constructor(public auth: AuthenticationService, public router: Router) {
  }

  canActivate(): Observable<boolean> {
    return new Observable<boolean>(obs => this.auth.isAdmin().subscribe((auth) => {
      if (auth) {
        return obs.next(true);
      }
      this.router.navigateByUrl('/home');
      return obs.next(false);
    }));
  }


}
