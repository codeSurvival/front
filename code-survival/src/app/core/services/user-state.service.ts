import { Injectable } from '@angular/core';
import {AuthenticationService} from './authentication.service';
import {BehaviorSubject, Subject} from 'rxjs';
import {ConnectedUser} from '../../shared/models/users/connected-user';

@Injectable({
  providedIn: 'root'
})
export class UserStateService{

  private user: ConnectedUser | null = null;
  userSubject$ = new Subject<ConnectedUser | null>();

  constructor(private authService: AuthenticationService) {
  }

  loadUser(): void{
    if (this.user == null){
      this.authService.getLoggedUser().subscribe(user => {
        this.user = new ConnectedUser( user.id, user.username, user.email, user.role, user.level);
        this.userSubject$.next(new ConnectedUser(this.user.id, this.user.username, this.user.email, this.user.role, user.level));
      });
    } else {
      this.userSubject$.next(new ConnectedUser(this.user.id, this.user.username, this.user.email, this.user.role, this.user.level));
    }
  }

  updateUser(user: ConnectedUser | null): void{
    this.user = user;
    if (this.user) {
      this.userSubject$.next(new ConnectedUser(this.user.id, this.user.username, this.user.email, this.user.role, this.user.level));
    } else {
      this.userSubject$.next(null);
    }
  }


}
