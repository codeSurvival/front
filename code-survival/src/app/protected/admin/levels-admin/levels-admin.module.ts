import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LevelsAdminRoutingModule } from './levels-admin-routing.module';
import { LevelsAdminRootComponent } from './levels-admin-root/levels-admin-root.component';
import { LevelsListComponent } from './levels-list/levels-list.component';
import {SharedModule} from '../../../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LevelItemComponent } from './level-item/level-item.component';
import {LevelAdminRootComponent} from './level-admin-root/level-admin-root.component';
import {ConstraintListComponent} from './constraint-list/constraint-list.component';
import {ConstraintItemComponent} from './constraint-item/constraint-item.component';
import { RegexListComponent } from './regex-list/regex-list.component';
import { RegexItemComponent } from './regex-item/regex-item.component';
import { NewLevelItemComponent } from './new-level-item/new-level-item.component';
import { NewConstraintItemComponent } from './new-constraint-item/new-constraint-item.component';
import { NewRegexItemComponent } from './new-regex-item/new-regex-item.component';


@NgModule({
  declarations: [
    LevelsAdminRootComponent,
    LevelsListComponent,
    LevelItemComponent,
    LevelAdminRootComponent,
    ConstraintListComponent,
    ConstraintItemComponent,
    RegexListComponent,
    RegexItemComponent,
    NewLevelItemComponent,
    NewConstraintItemComponent,
    NewConstraintItemComponent,
    NewRegexItemComponent,
  ],
  imports: [
    CommonModule,
    LevelsAdminRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LevelsAdminModule { }
