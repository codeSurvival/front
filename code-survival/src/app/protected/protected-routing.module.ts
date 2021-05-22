import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProtectedRootComponent} from './protected-root/protected-root.component';
import {AuthGuardService} from '../core/guards/auth-guard.service';



const routes: Routes = [
  {
    path: '', component: ProtectedRootComponent, canActivate: [AuthGuardService],  children: [
      {path: 'game', loadChildren: () => import('./game/game.module').then(m => m.GameModule)},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
