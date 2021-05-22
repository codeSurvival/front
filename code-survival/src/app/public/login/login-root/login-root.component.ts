import { Component, OnInit } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import Swal from 'sweetalert2';
import {AuthenticationService} from '../../../core/services/authentication.service';
import {UserEdit} from '../../../shared/models/users/user-edit';
import {UserLoginDto} from '../../../shared/dtos/users/user-login-dto';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-root',
  templateUrl: './login-root.component.html',
  styleUrls: ['./login-root.component.scss']
})
export class LoginRootComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {

  }

  onSubmitUser(user: UserEdit): void {

    this.authenticationService.signUp(user).subscribe(
      value => {
        this.registerSuccess();
      }, (err: HttpErrorResponse) => {
        if (err.status === 409) {
          this.registerConflict();
        } else {
          console.log(err);
          this.unknownError();
        }
      });
  }

  onLoginAttempt(user: UserLoginDto): void {
    this.authenticationService.login(user).subscribe(
      res => this.router.navigate(['/game'])
      , err => {
        this.unknownUser();
      }
    );

  }

  private registerSuccess(): void {
    Swal.fire({
      text: 'Inscription Réussie',
      icon: 'success'
    });
  }

  private registerConflict(): void {
    Swal.fire({
      text: 'Mail et/ou nom d\'utilisateur indisponibles',
      icon: 'error'
    });
  }

  private unknownError(): void {
    Swal.fire({
      text: 'Erreur inconnue, veuillez contacter les développeurs',
      icon: 'error'
    });
  }

  private unknownUser(): void {
    Swal.fire({
      text: 'Utilisateur inconnu',
      icon: 'error'
    });
  }
}
