import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatchCardComponent } from '../match-card/match-card.component';
import { MatchEventEnum } from '../enums/match-event.enum';
import { FootballLineupComponent } from './football-lineup/football-lineup.component';

@Component({
  selector: 'app-match-detail',
  standalone: true,
  imports: [CommonModule, MatchCardComponent, FootballLineupComponent],
  templateUrl: './match-detail.component.html',
  styleUrl: './match-detail.component.scss',
})
export class MatchDetailComponent implements OnInit {
  public match: any = {
    id: 1,
    homeId: 1,
    home: 'Đội Trẻ',
    homeLogo: 'assets/young-team.png',
    homeScore: 4,
    awayId: 2,
    away: 'Đội Già',
    awayScore: 4,
    awayLogo: 'assets/old-team.png',
    matchEvents: [
      {
        id: 1,
        eventType: MatchEventEnum.Goal,
        teamId: 1,
        user: { id: 1, name: 'Hoang Tran' },
        time: Math.floor(Math.random() * 90),
      },
      {
        id: 2,
        eventType: MatchEventEnum.Goal,
        teamId: 1,
        user: { id: 1, name: 'Hoang Tran' },
        time: Math.floor(Math.random() * 90),
      },
      {
        id: 3,
        eventType: MatchEventEnum.Goal,
        teamId: 1,
        user: { id: 2, name: 'Trong Vu' },
        time: Math.floor(Math.random() * 90),
      },
      {
        id: 4,
        eventType: MatchEventEnum.Goal,
        teamId: 2,
        user: { id: 3, name: 'Danh Nay' },
        time: Math.floor(Math.random() * 90),
      },
      {
        id: 5,
        eventType: MatchEventEnum.Goal,
        teamId: 2,
        user: { id: 3, name: 'Danh Nay' },
        time: Math.floor(Math.random() * 90),
      },
    ],
  };

  public readonly tabs: any[] = [
    {
      id: 'lineup',
      name: 'Đội hình',
      icon: 'groups',
    },
  ];
  public currentTabId!: string;

  constructor() {
    this.currentTabId = this.tabs[0].id;
  }

  ngOnInit(): void {}

  public setTab(tabId: string): void {
    if (this.currentTabId === tabId) return;

    this.currentTabId = tabId;
  }
}
