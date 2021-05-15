import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDocComponent } from './game-doc.component';

describe('GameDocComponent', () => {
  let component: GameDocComponent;
  let fixture: ComponentFixture<GameDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameDocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
