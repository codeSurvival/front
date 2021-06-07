import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersAdminRootComponent} from './users-admin-root/users-admin-root.component';


const routes: Routes = [
  {
    path: '', component: UsersAdminRootComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersAdminRoutingModule { }
