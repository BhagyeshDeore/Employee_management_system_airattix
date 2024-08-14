import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveDetailsDialogComponent } from './leave-details-dialog.component';

describe('LeaveDetailsDialogComponent', () => {
  let component: LeaveDetailsDialogComponent;
  let fixture: ComponentFixture<LeaveDetailsDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeaveDetailsDialogComponent]
    });
    fixture = TestBed.createComponent(LeaveDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
