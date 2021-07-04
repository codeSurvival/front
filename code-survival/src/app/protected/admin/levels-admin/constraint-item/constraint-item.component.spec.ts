import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstraintItemComponent } from './constraint-item.component';

describe('ConstraintItemComponent', () => {
  let component: ConstraintItemComponent;
  let fixture: ComponentFixture<ConstraintItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstraintItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstraintItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
