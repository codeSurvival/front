import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersAdminRootComponent } from './users-admin-root.component';

describe('UsersAdminRootComponent', () => {
  let component: UsersAdminRootComponent;
  let fixture: ComponentFixture<UsersAdminRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersAdminRootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersAdminRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
