import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballStandingComponent } from './football-standing.component';

describe('FootballStandingComponent', () => {
  let component: FootballStandingComponent;
  let fixture: ComponentFixture<FootballStandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FootballStandingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FootballStandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
