import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KotlinLibraryDetailsComponent } from './kotlin-library-details.component';

describe('KotlinLibraryDetailsComponent', () => {
  let component: KotlinLibraryDetailsComponent;
  let fixture: ComponentFixture<KotlinLibraryDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KotlinLibraryDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KotlinLibraryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
