import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveConstraintsComponent } from './active-constraints.component';

describe('ActiveConstraintsComponent', () => {
  let component: ActiveConstraintsComponent;
  let fixture: ComponentFixture<ActiveConstraintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveConstraintsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveConstraintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
