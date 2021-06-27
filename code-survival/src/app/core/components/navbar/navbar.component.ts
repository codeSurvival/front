import {Component, Input, OnInit} from '@angular/core';
import {ConnectedUser} from '../../../shared/models/users/connected-user';
import {AuthenticationService} from '../../services/authentication.service';
import {UserStateService} from '../../services/user-state.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input()
  user: ConnectedUser | null = null;

  constructor(private readonly authService: AuthenticationService,
              private readonly userStateService: UserStateService,
              private readonly router: Router) { }

  ngOnInit(): void {
  }

  onLogout(): void {
    this.userStateService.updateUser(null);
    this.authService.clearLocalUserData();
    this.router.navigate(['/home']);
  }
}
