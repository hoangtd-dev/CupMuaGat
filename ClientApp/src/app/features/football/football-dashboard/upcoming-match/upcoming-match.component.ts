import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { MatchCardComponent } from '../../match-card/match-card.component';

import { MatchViewModel } from '@model/view/football';
import { MatchService } from '@service/api/football';

@Component({
  selector: 'app-upcoming-match',
  standalone: true,
  imports: [CommonModule, MatchCardComponent],
  templateUrl: './upcoming-match.component.html',
  styleUrl: './upcoming-match.component.scss',
})
export class UpcomingMatchComponent {
  private _leagueId = 1;
  public matches$!: Observable<MatchViewModel[]>;

  constructor(
    private readonly _router: Router,
    private readonly _matchService: MatchService
  ) {}

  ngOnInit(): void {
    this.matches$ = this._matchService.getUpcomingMatches(this._leagueId);
  }
}
