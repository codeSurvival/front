import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRegexItemComponent } from './new-regex-item.component';

describe('NewRegexItemComponent', () => {
  let component: NewRegexItemComponent;
  let fixture: ComponentFixture<NewRegexItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewRegexItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRegexItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
