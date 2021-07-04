import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersAdminRootComponent} from '../users-admin/users-admin-root/users-admin-root.component';
import {LevelsAdminRootComponent} from './levels-admin-root/levels-admin-root.component';
import {LevelAdminRootComponent} from './level-admin-root/level-admin-root.component';


const routes: Routes = [
  {path: '', component: LevelsAdminRootComponent},
  {path: ':id', component: LevelAdminRootComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LevelsAdminRoutingModule { }
