import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameRulesFailureComponent } from './game-rules-failure.component';

describe('GameRulesFailureComponent', () => {
  let component: GameRulesFailureComponent;
  let fixture: ComponentFixture<GameRulesFailureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameRulesFailureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameRulesFailureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
