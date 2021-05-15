import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProtectedRootComponent} from './protected-root/protected-root.component';



const routes: Routes = [
  {
    path: '', component: ProtectedRootComponent,  children: [
      {path: 'game', loadChildren: () => import('./game/game.module').then(m => m.GameModule)},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
