import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelsAdminRootComponent } from './levels-admin-root.component';

describe('LevelsAdminRootComponent', () => {
  let component: LevelsAdminRootComponent;
  let fixture: ComponentFixture<LevelsAdminRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelsAdminRootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelsAdminRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
