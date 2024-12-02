import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballDashboardComponent } from './football-dashboard.component';

describe('FootballDashboardComponent', () => {
  let component: FootballDashboardComponent;
  let fixture: ComponentFixture<FootballDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FootballDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FootballDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
