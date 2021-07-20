import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {GameEventDTO, WorldDTO} from '../../../shared/dtos/sse/game-event-dto';
import {DisplayedField} from '../../../shared/models/game/displayed-field';

@Component({
  selector: 'app-game-state',
  templateUrl: './game-state.component.html',
  styleUrls: ['./game-state.component.scss']
})
export class GameStateComponent implements OnInit, OnChanges {

  @Input() gameEvents: GameEventDTO[] = [];
  @Input() world: WorldDTO | null = null;
  @Input() reset: boolean = false;

  displayedField: DisplayedField | null = null;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.world && changes.world.currentValue) {
      this.displayedField = new DisplayedField(
        changes.world.currentValue.grid,
        changes.world.currentValue.mobDTO.mobState);
    }

    if (changes.reset && changes.reset.currentValue === true) {
      this.gameEvents = [];
      this.world = null;
    }
  }
}
