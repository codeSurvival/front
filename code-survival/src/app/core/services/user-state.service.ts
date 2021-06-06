import { Injectable } from '@angular/core';
import {AuthenticationService} from './authentication.service';
import {BehaviorSubject, Subject} from 'rxjs';
import {ConnectedUser} from '../../shared/models/users/connected-user';

@Injectable({
  providedIn: 'root'
})
export class UserStateService{

  private user!: ConnectedUser;
  userSubject$ = new Subject<ConnectedUser>( );

  constructor(private authService: AuthenticationService) {
  }

  loadUser(): void{
    if (this.user == null){
      this.authService.getLoggedUser().subscribe(user => {
        this.user = new ConnectedUser( user.id, user.username, user.email);
        this.userSubject$.next(new ConnectedUser(this.user.id, this.user.username, this.user.email));
      });
    } else {
      this.userSubject$.next(new ConnectedUser(this.user.id, this.user.username, this.user.email));
    }
  }

  updateUser(user: ConnectedUser): void{
    this.user = user;
    this.userSubject$.next(new ConnectedUser(this.user.id, this.user.username, this.user.email));
  }


}
