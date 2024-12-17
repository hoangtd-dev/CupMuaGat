import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FootballHistoryComponent } from '../football/football-dashboard/league-information/football-history/football-history.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FootballHistoryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private readonly _router: Router) {}

  public navigateToFootballPage(): void {
    this._router.navigate(['/football/leagues/1']);
  }
}
