import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {CoordinatesDTO, GameEventDTO, MobNeeds, MobStateDTO, WorldDTO} from '../../../shared/dtos/sse/game-event-dto';
import {DisplayedField} from '../../../shared/models/game/displayed-field';


@Component({
  selector: 'app-game-state',
  templateUrl: './game-state.component.html',
  styleUrls: ['./game-state.component.scss']
})
export class GameStateComponent implements OnInit, OnChanges {

  @Input() lastGameEvent: GameEventDTO | null = null;
  @Input() world: WorldDTO | null = null;
  @Input() reset: boolean = false;

  displayedField: DisplayedField | null = null;


  localeGameEvents: GameEventDTO[] = [];

  turn = 0;
  health: number | undefined = 0;
  food: number | undefined = 0;
  mobPosition: CoordinatesDTO = {x : 0, y : 0};
  maxHealth = 50;
  maxFood = 50;
  min = 0;
  foodCriticity = 'full';


  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.world && changes.world.currentValue) {
      const worldDTO: WorldDTO = changes.world.currentValue;

      this.setMobState(worldDTO.mobDTO.mobState);
      this.turn = worldDTO.round;
      this.displayedField = new DisplayedField(
        worldDTO.grid,
        worldDTO.mobDTO.mobState);
    }

    if (changes.lastGameEvent &&  changes.lastGameEvent.currentValue) {
      this.localeGameEvents.push(changes.lastGameEvent.currentValue);
    }


    if (changes.reset && changes.reset.currentValue === true) {
      this.localeGameEvents = [];
      this.world = null;
    }
  }

  private setMobState(mobState: MobStateDTO): void {
    this.mobPosition = mobState.position;
    if (mobState.needs) {
      console.log(mobState.needs);
      this.health = mobState.needs.BLOOD !== undefined ? mobState.needs.BLOOD : 0;
      this.food = mobState.needs.HUNGER !== undefined ? mobState.needs.HUNGER : 0;
      if (this.food) {
        this.foodCriticity = this.food >= (this.maxFood / 2) ? 'food-full' : 'food-hungry';
      }
    }
  }
}
