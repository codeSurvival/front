import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-game-root',
  templateUrl: './game-root.component.html',
  styleUrls: ['./game-root.component.scss']
})
export class GameRootComponent implements OnInit {
  code: string;

  constructor(private router: Router) {
    this.code = ' public static void main() {\n\tConsole.Writeln("Hello world!");\n}';
  }

  ngOnInit(): void {
  }

}
