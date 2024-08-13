import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationForLeaveComponent } from './application-for-leave.component';

describe('ApplicationForLeaveComponent', () => {
  let component: ApplicationForLeaveComponent;
  let fixture: ComponentFixture<ApplicationForLeaveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplicationForLeaveComponent]
    });
    fixture = TestBed.createComponent(ApplicationForLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
