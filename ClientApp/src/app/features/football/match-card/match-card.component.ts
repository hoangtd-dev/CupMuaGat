import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchEventEnum } from '../enums/match-event.enum';
import { MatchViewModel } from '../models/view-model/match.view-model';
import { forkJoin } from 'rxjs';
import { TeamService } from '../services/team.service';
import { UserService } from '../../../core/services/api/user.service';
import { UserViewModel } from '../../../core/models/view-model/user.view-model';
import { CommonModule } from '@angular/common';
import { MatchStatusEnum } from '../enums/match-status.enum';

@Component({
  selector: 'app-match-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './match-card.component.html',
  styleUrl: './match-card.component.scss',
})
export class MatchCardComponent implements OnInit {
  @Input() match!: MatchViewModel;
  @Input() isDetail: boolean = false;

  public readonly STATUS = MatchStatusEnum;
  private _leagueId = 1; // TODO: update hardcode later

  public homePlayers: any[] = [];
  public awayPlayers: any[] = [];

  constructor(
    private readonly _router: Router,
    private readonly _teamService: TeamService,
    private readonly _userService: UserService
  ) {}

  ngOnInit(): void {
    this._setupTeams();

    if (this.isDetail) {
      this._setupUsers();
      this._setupMatchEvents();
    }
  }

  private _setupTeams(): void {
    forkJoin([
      this._teamService.getTeamById(this.match.homeId),
      this._teamService.getTeamById(this.match.awayId),
    ]).subscribe(([home, away]) => {
      this.match.home = home;
      this.match.away = away;
    });
  }

  private _setupUsers(): void {
    const uniqueIds = [
      ...new Set([
        this.match.lineup?.homeGkId,
        this.match.lineup?.awayGkId,
        ...(this.match.lineup?.homeDfIds || []),
        ...(this.match.lineup?.awayDfIds || []),
        ...(this.match.lineup?.homeStIds || []),
        ...(this.match.lineup?.awayStIds || []),
        ...(this.match.lineup?.homeSubstituteIds || []),
        ...(this.match.lineup?.awaySubstituteIds || []),
        ...(this.match.matchEvents?.map((x) => x.userId) || []),
      ]),
    ].filter((x) => x != undefined) as number[];

    if (uniqueIds.length === 0) return;

    this._userService.getUsersByIds(uniqueIds).subscribe((users) => {
      this.match.matchEvents?.forEach((e) => {
        e.user = users.find((u) => u.id === e.userId);
      });

      this._setupLineup(users);
    });
  }

  private _setupLineup(users: UserViewModel[]): void {
    if (!this.match.lineup) return;

    this.match.lineup.homeGk = users.find(
      (u) => this.match.lineup?.homeGkId === u.id
    );
    this.match.lineup.awayGk = users.find(
      (u) => this.match.lineup?.awayGkId === u.id
    );

    this.match.lineup.homeDfIds?.forEach((id) => {
      this.match.lineup!.homeDfs?.push(
        users.find((u) => id === u.id) as UserViewModel
      );
    });

    this.match.lineup.awayDfIds?.forEach((id) => {
      this.match.lineup!.awayDfs?.push(
        users.find((u) => id === u.id) as UserViewModel
      );
    });

    this.match.lineup.homeStIds?.forEach((id) => {
      this.match.lineup!.homeSts?.push(
        users.find((u) => id === u.id) as UserViewModel
      );
    });

    this.match.lineup.awayStIds?.forEach((id) => {
      this.match.lineup!.awaySts?.push(
        users.find((u) => id === u.id) as UserViewModel
      );
    });

    this.match.lineup.homeSubstituteIds?.forEach((id) => {
      this.match.lineup!.homeSubstitutes?.push(
        users.find((u) => id === u.id) as UserViewModel
      );
    });

    this.match.lineup.awaySubstituteIds?.forEach((id) => {
      this.match.lineup!.awaySubstitutes?.push(
        users.find((u) => id === u.id) as UserViewModel
      );
    });
  }

  private _setupMatchEvents(): void {
    this.match?.matchEvents
      ?.filter((x: any) => x.eventType === MatchEventEnum.Goal)
      .sort((a: any, b: any) => a.time - b.time)
      .forEach((event: any) => {
        const teamEvents =
          event.teamId === this.match.homeId
            ? this.homePlayers
            : this.awayPlayers;

        const user = teamEvents.find((x) => x.userId === event.user.id);

        if (user) {
          user.goalTimelines.push(`${event.time}'`);
        } else {
          teamEvents.push({
            userId: event.user.id,
            username: event.user.name,
            goalTimelines: [`${event.time}'`],
          });
        }
      });

    this.homePlayers.forEach(
      (x) => (x.goalInText = x.goalTimelines.join(', '))
    );
    this.awayPlayers.forEach(
      (x) => (x.goalInText = x.goalTimelines.join(', '))
    );
  }

  public navigateToDetail(id: number): void {
    if (this.isDetail) return;

    this._router.navigate([`football/leagues/${this._leagueId}/matches/${id}`]);
  }
}
