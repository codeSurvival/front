import {Component, OnInit} from '@angular/core';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';
import {UserStateService} from './core/services/user-state.service';
import {ConnectedUser} from './shared/models/users/connected-user';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  loading: boolean;
  isConnected = false;
  connectedUser: any;
  connectedUser$ = new BehaviorSubject<ConnectedUser | null>(null);
  constructor(private readonly router: Router, private readonly userStateService: UserStateService) {
    this.loading = false;

    router.events.subscribe(
      (event: any): void => {
        if (event instanceof NavigationStart) {
          this.loading = true;
        } else if (event instanceof NavigationEnd) {
          this.loading = false;
        }
      }
    );
  }

  ngOnInit(): void {
    this.userStateService.userSubject$.subscribe(user => this.connectedUser$.next(user));
    this.userStateService.loadUser();
  }


}
