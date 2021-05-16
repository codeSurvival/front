import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../../core/services/authentication.service';
import {Router} from '@angular/router';
import {UserLoginDto} from '../../../shared/dtos/users/user-login-dto';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  userLoginForm: FormGroup;

  usernameCtrl: FormControl;
  userPwdCtrl: FormControl;

  constructor(private authenticationService: AuthenticationService,
              formBuilder: FormBuilder,
              private router: Router) {
    this.usernameCtrl = formBuilder.control('', Validators.required);
    this.userPwdCtrl = formBuilder.control('', Validators.required);

    this.userLoginForm = formBuilder.group({
        username: this.usernameCtrl,
        password: this.userPwdCtrl
      }
    );
  }

  ngOnInit(): void {
  }

  attemptLogin(): void {

    const userLoginDTO: UserLoginDto = {
      username: this.usernameCtrl.value,
      password: this.userPwdCtrl.value
    };
    this.authenticationService.login(userLoginDTO).subscribe(
      value => {
        this.router.navigateByUrl('/game').then(r => console.log(r));
      }, (err: HttpErrorResponse) => {
        if (err.status === 404) {
          this.noMatchError();
        } else {
          this.unknownError();
        }
      });
    //
  }

  isFormValid(): boolean {
    return this.userLoginForm.valid;
  }

  private noMatchError(): void {
    Swal.fire({
      text: 'Aucun utilisateur ne correspond à cette combinaison de nom et mot de passe',
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
