import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballLineupComponent } from './football-lineup.component';

describe('FootballLineupComponent', () => {
  let component: FootballLineupComponent;
  let fixture: ComponentFixture<FootballLineupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FootballLineupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FootballLineupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
