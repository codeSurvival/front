import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewConstraintItemComponent } from './new-constraint-item.component';

describe('NewConstraintItemComponent', () => {
  let component: NewConstraintItemComponent;
  let fixture: ComponentFixture<NewConstraintItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewConstraintItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewConstraintItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
