import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersAdminRoutingModule } from './users-admin-routing.module';
import { UsersAdminRootComponent } from './users-admin-root/users-admin-root.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    UsersAdminRootComponent
  ],
    imports: [
        CommonModule,
        UsersAdminRoutingModule,
        MatCardModule
    ]
})
export class UsersAdminModule { }
