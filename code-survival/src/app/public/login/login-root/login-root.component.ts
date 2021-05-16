import { Component, OnInit } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import Swal from 'sweetalert2';
import {AuthenticationService} from '../../../core/services/authentication.service';
import {UserEdit} from '../../../shared/models/users/user-edit';

@Component({
  selector: 'app-login-root',
  templateUrl: './login-root.component.html',
  styleUrls: ['./login-root.component.scss']
})
export class LoginRootComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {

    console.log('coucou');
  }

  onSubmitUser(user: UserEdit): void {
    this.authenticationService.signUp(user).subscribe(
      value => {
        this.registerSuccess();
      }, (err: HttpErrorResponse) => {
        if (err.status === 409) {
          this.registerConflict();
        } else {
          this.unknownError();
        }
      });
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

}
