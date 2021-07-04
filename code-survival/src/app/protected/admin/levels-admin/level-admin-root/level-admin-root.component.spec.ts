import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelAdminRootComponent } from './level-admin-root.component';

describe('LevelAdminRootComponent', () => {
  let component: LevelAdminRootComponent;
  let fixture: ComponentFixture<LevelAdminRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelAdminRootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelAdminRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
