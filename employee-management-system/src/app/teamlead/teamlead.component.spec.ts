import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamleadComponent } from './teamlead.component';

describe('TeamleadComponent', () => {
  let component: TeamleadComponent;
  let fixture: ComponentFixture<TeamleadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamleadComponent]
    });
    fixture = TestBed.createComponent(TeamleadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
