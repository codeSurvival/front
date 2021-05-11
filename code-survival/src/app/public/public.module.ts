import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import {SharedModule} from '../shared/shared.module';
import {CoreModule} from '../core/core.module';
import { PublicRootComponent } from './public-root/public-root.component';


@NgModule({
  declarations: [PublicRootComponent],
  imports: [
    SharedModule,
    PublicRoutingModule,
    CoreModule,
  ]
})
export class PublicModule { }
