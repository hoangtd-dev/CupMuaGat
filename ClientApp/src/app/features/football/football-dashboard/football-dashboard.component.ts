import { Component } from '@angular/core';
import { UpcomingMatchComponent } from './upcoming-match/upcoming-match.component';
import { LeagueInformationComponent } from './league-information/league-information.component';
import { LeagueViewModel } from '../models/league.view-model';
import { MatchStatusEnum } from '../enums/match-status.enum';
import { TeamViewModel } from '../models/team.view-model';

@Component({
  selector: 'app-football-dashboard',
  standalone: true,
  imports: [UpcomingMatchComponent, LeagueInformationComponent],
  templateUrl: './football-dashboard.component.html',
  styleUrl: './football-dashboard.component.scss',
})
export class FootballDashboardComponent {
  public league!: LeagueViewModel;
  public teams!: TeamViewModel[];

  constructor() {
    this.teams = [
      { id: 1, name: 'Đội Trẻ' },
      { id: 2, name: 'Đội Già' },
    ];

    this.league = {
      id: 1,
      name: 'Cúp Mùa Gặt',
      matches: [
        {
          id: 1,
          homeId: 1,
          homeScore: 6,
          awayId: 2,
          awayScore: 2,
          status: MatchStatusEnum.Completed,
          matchEvent: [],
        },
        {
          id: 2,
          homeId: 1,
          homeScore: 6,
          awayId: 2,
          awayScore: 5,
          status: MatchStatusEnum.Completed,
          matchEvent: [],
        },
      ],
    };
  }
}
