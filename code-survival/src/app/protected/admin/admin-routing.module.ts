import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminRootComponent} from './admin-root/admin-root.component';
import {AdminGuardService} from '../../core/guards/admin-guard.service';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'admin/users'},
  {path: '', component: AdminRootComponent, canActivate: [AdminGuardService], children: [
      {path: 'users', loadChildren: () => import('./users-admin/users-admin.module').then(m => m.UsersAdminModule)}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
