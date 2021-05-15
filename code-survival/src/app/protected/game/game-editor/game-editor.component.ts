import { Component, OnInit } from '@angular/core';
import IStandaloneEditorConstructionOptions = monaco.editor.IStandaloneEditorConstructionOptions;

@Component({
  selector: 'app-game-editor',
  templateUrl: './game-editor.component.html',
  styleUrls: ['./game-editor.component.scss']
})
export class GameEditorComponent implements OnInit {

  editorOptions: IStandaloneEditorConstructionOptions = {
    theme: 'vs',
    language: 'csharp',
    wrappingIndent: 'indent',
    minimap: {
      enabled: false,
    },
    dimension : {
      height: 500,
      width: 100
    }
  };
  code = ' public static void main() {\n\tConsole.Writeln("Hello world!");\n}';

  constructor() { }

  ngOnInit(): void {
  }

}
