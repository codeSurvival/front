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

  displayedField: DisplayedField | null = null;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const worldDTO = (changes.world.currentValue as WorldDTO);
    if (worldDTO) {
      this.displayedField = new DisplayedField(worldDTO.grid, worldDTO.mobDTO.mobState);
    }
  }
}
