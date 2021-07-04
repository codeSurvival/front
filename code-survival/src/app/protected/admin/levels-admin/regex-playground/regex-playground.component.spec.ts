import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegexPlaygroundComponent } from './regex-playground.component';

describe('RegexPlaygroundComponent', () => {
  let component: RegexPlaygroundComponent;
  let fixture: ComponentFixture<RegexPlaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegexPlaygroundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegexPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
