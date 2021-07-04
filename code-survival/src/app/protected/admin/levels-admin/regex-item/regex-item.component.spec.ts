import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegexItemComponent } from './regex-item.component';

describe('RegexItemComponent', () => {
  let component: RegexItemComponent;
  let fixture: ComponentFixture<RegexItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegexItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegexItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
