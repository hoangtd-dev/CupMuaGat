import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballHistoryComponent } from './football-history.component';

describe('FootballHistoryComponent', () => {
  let component: FootballHistoryComponent;
  let fixture: ComponentFixture<FootballHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FootballHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FootballHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
