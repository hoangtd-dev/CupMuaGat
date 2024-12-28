import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

import { MatchCardComponent } from '../football/match-card/match-card.component';

import { MatchViewModel } from '@model/view/football';
import { MatchService } from '@service/api/football';

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
