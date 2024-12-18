import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatchCardComponent } from '../../../match-card/match-card.component';
import { MatchViewModel } from '../../../models/view-model/match.view-model';
import { Observable } from 'rxjs';
import { MatchService } from '../../../services/match.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-football-history',
  standalone: true,
  imports: [CommonModule, MatchCardComponent],
  templateUrl: './football-history.component.html',
  styleUrl: './football-history.component.scss',
})
export class FootballHistoryComponent implements OnInit {
  public matches$!: Observable<MatchViewModel[]>;
  private _leagueId!: number;

  constructor(
    private readonly _matchService: MatchService,
    private readonly _activatedRoute: ActivatedRoute
  ) {
    this._leagueId = Number(_activatedRoute.snapshot.params['id']);
  }

  ngOnInit(): void {
    this._getMatches(this._leagueId);
  }

  private _getMatches(leagueId: number): void {
    this.matches$ = this._matchService.getMatchesByLeagueId(leagueId);
  }
}
