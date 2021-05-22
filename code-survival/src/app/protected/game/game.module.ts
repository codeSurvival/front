import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameRootComponent } from './game-root/game-root.component';
import { GameEditorComponent } from './game-editor/game-editor.component';
import { GameRulesComponent } from './game-rules/game-rules.component';
import { GameDocComponent } from './game-doc/game-doc.component';
import { GameStateComponent } from './game-state/game-state.component';
import {GameRoutingModule} from './game-routing.module';
import {MatTableModule} from '@angular/material/table';
import {MonacoEditorModule} from '@materia-ui/ngx-monaco-editor';
import {FormsModule} from '@angular/forms';
import { GameActionsComponent } from './game-actions/game-actions.component';



@NgModule({
  declarations: [
    GameRootComponent,
    GameEditorComponent,
    GameRulesComponent,
    GameDocComponent,
    GameStateComponent,
    GameActionsComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
    MatTableModule,
    MonacoEditorModule,
    FormsModule
  ]
})
export class GameModule { }
