import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GameRootComponent} from './game-root/game-root.component';


const routes: Routes = [
  {
    path: '', component: GameRootComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule {
}
