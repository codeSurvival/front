import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProtectedRootComponent} from './protected-root/protected-root.component';
import {AuthGuardService} from '../core/guards/auth-guard.service';



const routes: Routes = [
  {
    path: '', component: ProtectedRootComponent, canActivate: [AuthGuardService],  children: [
      {path: 'game', loadChildren: () => import('./game/game.module').then(m => m.GameModule)},
      {path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
