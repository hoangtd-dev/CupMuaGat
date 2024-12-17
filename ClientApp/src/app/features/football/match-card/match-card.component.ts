import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchEventEnum } from '../enums/match-event.enum';

@Component({
  selector: 'app-match-card',
  standalone: true,
  imports: [],
  templateUrl: './match-card.component.html',
  styleUrl: './match-card.component.scss',
})
export class MatchCardComponent implements OnInit {
  @Input() match: any;
  @Input() isDetail: boolean = false;
  private _leagueId = 1; // TODO: update hardcode later

  public homePlayers: any[] = [];
  public awayPlayers: any[] = [];
  public maxEventLength = 0;

  constructor(private readonly _router: Router) {}

  ngOnInit(): void {
    if (this.isDetail) {
      this._setupMatchEvents();
    }
  }

  private _setupMatchEvents(): void {
    this.match.matchEvents
      .filter((x: any) => x.eventType === MatchEventEnum.Goal)
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
    this.maxEventLength =
      this.homePlayers.length > this.awayPlayers.length
        ? this.homePlayers.length
        : this.awayPlayers.length;
  }

  public navigateToDetail(id: number): void {
    if (this.isDetail) return;

    this._router.navigate([`football/leagues/${this._leagueId}/matches/${id}`]);
  }
}
