import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueInformationComponent } from './league-information.component';

describe('LeagueInformationComponent', () => {
  let component: LeagueInformationComponent;
  let fixture: ComponentFixture<LeagueInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeagueInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeagueInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
