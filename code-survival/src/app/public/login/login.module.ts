import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginRootComponent } from './login-root/login-root.component';
import { SignInComponent } from './sign-in/sign-in.component';
import {SharedModule} from '../../shared/shared.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    LoginRootComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    SharedModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class LoginModule { }
