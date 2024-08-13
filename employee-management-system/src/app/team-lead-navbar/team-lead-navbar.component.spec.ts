import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamLeadNavbarComponent } from './team-lead-navbar.component';

describe('TeamLeadNavbarComponent', () => {
  let component: TeamLeadNavbarComponent;
  let fixture: ComponentFixture<TeamLeadNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamLeadNavbarComponent]
    });
    fixture = TestBed.createComponent(TeamLeadNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
