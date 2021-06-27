import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeRootComponent} from './home-root/home-root.component';
import {LoggedGuardService} from '../../core/guards/logged-guard.service';

const routes: Routes = [
  {
    path: '', component: HomeRootComponent, canActivate : [LoggedGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
