import { Component, OnInit } from '@angular/core';
import { UpcomingMatchComponent } from './upcoming-match/upcoming-match.component';
import { LeagueInformationComponent } from './league-information/league-information.component';
import { LeagueViewModel } from '../models/view-model/league.view-model';
import { Observable } from 'rxjs';
import { LeagueService } from '../services/league.service';
import { BaseComponent } from '../../../core/components/base-component/base-component.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-football-dashboard',
  standalone: true,
  imports: [UpcomingMatchComponent, LeagueInformationComponent, CommonModule],
  templateUrl: './football-dashboard.component.html',
  styleUrl: './football-dashboard.component.scss',
})
export class FootballDashboardComponent
  extends BaseComponent
  implements OnInit
{
  public league$!: Observable<LeagueViewModel | undefined>;
  private _leagueId!: number;

  constructor(
    private readonly _leagueService: LeagueService,
    private readonly _activatedRoute: ActivatedRoute
  ) {
    super();
    this._leagueId = Number(_activatedRoute.snapshot.params['id']);
  }

  ngOnInit(): void {
    this._getLeague(this._leagueId);
  }

  private _getLeague(leagueId: number): void {
    this.league$ = this._leagueService.getLeagueById(leagueId);
  }
}
