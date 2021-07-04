import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLevelItemComponent } from './new-level-item.component';

describe('NewLevelItemComponent', () => {
  let component: NewLevelItemComponent;
  let fixture: ComponentFixture<NewLevelItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewLevelItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLevelItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
