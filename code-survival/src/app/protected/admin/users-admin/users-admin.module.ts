import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersAdminRoutingModule } from './users-admin-routing.module';
import { UsersAdminRootComponent } from './users-admin-root/users-admin-root.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    UsersAdminRootComponent
  ],
  imports: [
    CommonModule,
    UsersAdminRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule
  ]
})
export class UsersAdminModule { }
