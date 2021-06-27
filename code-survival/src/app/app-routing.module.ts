import { NgModule } from '@angular/core';
import {RouteReuseStrategy, RouterModule, Routes} from '@angular/router';
import {HomeRootComponent} from './public/home/home-root/home-root.component';
import {LoggedGuardService} from './core/guards/logged-guard.service';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: HomeRootComponent , canActivate: [LoggedGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
