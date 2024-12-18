import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from '../football/services/match.service';
import { Observable } from 'rxjs';
import { MatchViewModel } from '../football/models/view-model/match.view-model';
import { CommonModule } from '@angular/common';
import { MatchCardComponent } from '../football/match-card/match-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatchCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private _leagueId = 1;
  public match$!: Observable<MatchViewModel | undefined>;

  constructor(
    private readonly _router: Router,
    private readonly _matchService: MatchService
  ) {}

  ngOnInit(): void {
    this.match$ = this._matchService.getLatestMatch(this._leagueId);
  }

  public navigateToFootballPage(): void {
    this._router.navigate([`/football/leagues/${this._leagueId}`]);
  }
}
