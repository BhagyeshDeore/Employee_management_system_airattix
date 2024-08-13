import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerNavbarComponent } from './engineer-navbar.component';

describe('EngineerNavbarComponent', () => {
  let component: EngineerNavbarComponent;
  let fixture: ComponentFixture<EngineerNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EngineerNavbarComponent]
    });
    fixture = TestBed.createComponent(EngineerNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
