import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from 'src/app/shared/shared.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeRootComponent } from './home-root/home-root.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';


@NgModule({
  declarations: [
    HomeRootComponent,
    HomeFooterComponent,
    HomeBannerComponent
  ],
  exports: [
    HomeBannerComponent,
    HomeFooterComponent
  ],
  imports: [

    SharedModule,
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
