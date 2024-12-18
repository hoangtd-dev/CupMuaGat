import { MatTableModule } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { MatchService } from '../../../services/match.service';
import { TeamService } from '../../../services/team.service';
import { ActivatedRoute } from '@angular/router';
import { StandingViewModel } from '../../../models/view-model/standing.view-model';

@Component({
  selector: 'app-football-standing',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './football-standing.component.html',
  styleUrl: './football-standing.component.scss',
})
export class FootballStandingComponent implements OnInit {
  private _leagueId!: number;
  public dataSource: StandingViewModel[] = [];

  public readonly displayedColumns: string[] = [
    'position',
    'team',
    'point',
    'win-draw-lose',
  ];

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _matchService: MatchService,
    private readonly _teamService: TeamService
  ) {
    this._leagueId = Number(_activatedRoute.snapshot.params['id']);
  }

  ngOnInit(): void {
    this._getAllTeamsByLeagueId(this._leagueId);
    this._calculatePoint(this._leagueId);
  }

  private _getAllTeamsByLeagueId(leagueId: number): void {
    this._teamService.getTeamsByLeagueId(leagueId).subscribe((teams) => {
      teams.forEach((team) => {
        this.dataSource.push(
          StandingViewModel.createFromTeam(team?.id, team?.name)
        );
      });
    });
  }

  private _calculatePoint(leagueId: number): void {
    this._matchService.getMatchesByLeagueId(leagueId).subscribe((matches) => {
      matches.forEach((match) => {
        const home = this.dataSource.find((x) => x.teamId === match.homeId);
        const away = this.dataSource.find((x) => x.teamId === match.awayId);
        if (match.homeScore > match.awayScore) {
          home!.win!++;
          away!.lose!++;
          home!.point! += 3;
        } else if (match.homeScore < match.awayScore) {
          away!.win!++;
          home!.lose!++;
          away!.point! += 3;
        } else {
          home!.draw!++;
          away!.draw!++;
          home!.point! += 1;
          away!.point! += 1;
        }
      });
    });
  }
}
