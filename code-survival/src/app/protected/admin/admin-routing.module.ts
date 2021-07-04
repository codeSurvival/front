import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminRootComponent} from './admin-root/admin-root.component';
import {AdminGuardService} from '../../core/guards/admin-guard.service';
import {LevelsAdminRootComponent} from './levels-admin/levels-admin-root/levels-admin-root.component';


const routes: Routes = [
  {path: '', redirectTo: 'admin/users'},
  {path: '', component: AdminRootComponent, canActivate: [AdminGuardService], children: [
      {path: 'users', loadChildren: () => import('./users-admin/users-admin.module').then(m => m.UsersAdminModule)},
      {path: 'levels', loadChildren: () => import('./levels-admin/levels-admin.module').then(m => m.LevelsAdminModule)},
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
