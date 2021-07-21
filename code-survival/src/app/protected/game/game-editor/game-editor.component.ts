import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import IStandaloneEditorConstructionOptions = monaco.editor.IStandaloneEditorConstructionOptions;

@Component({
  selector: 'app-game-editor',
  templateUrl: './game-editor.component.html',
  styleUrls: ['./game-editor.component.scss']
})
export class GameEditorComponent implements OnInit {

  @Input()  code!: string;
  @Output() codeChange = new EventEmitter<string>();


  editorOptions: IStandaloneEditorConstructionOptions = {
    theme: 'vs',
    language: 'kotlin',
    wrappingIndent: 'indent',
    automaticLayout: true,
    minimap: {
      enabled: false,
    }
    // ,
    // dimension : {
    //   height: 800,
    //   width: 100
    // }
  };


  constructor() { }

  ngOnInit(): void {
  }

  private setCode(code: string): void {
    this.code = code;
    this.codeChange.emit(this.code);
  }

}
