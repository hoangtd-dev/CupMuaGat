import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { MatchCardComponent } from '../match-card/match-card.component';
import { FootballLineupComponent } from './football-lineup/football-lineup.component';

import { MatchViewModel } from '@model/view/football';
import { MatchService } from '@service/api/football';

@Component({
  selector: 'app-match-detail',
  standalone: true,
  imports: [CommonModule, MatchCardComponent, FootballLineupComponent],
  templateUrl: './match-detail.component.html',
  styleUrl: './match-detail.component.scss',
})
export class MatchDetailComponent implements OnInit {
  private _matchId!: number;

  public match$!: Observable<MatchViewModel | undefined>;

  public readonly tabs: any[] = [
    {
      id: 'lineup',
      name: 'Đội hình',
      icon: 'groups',
    },
  ];
  public currentTabId!: string;

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _matchService: MatchService
  ) {
    this.currentTabId = this.tabs[0].id;
    this._matchId = Number(_activatedRoute.snapshot.params['matchId']);
  }

  ngOnInit(): void {
    this._getMatch();
  }

  private _getMatch(): void {
    this.match$ = this._matchService.getMatchById(this._matchId);
  }

  public setTab(tabId: string): void {
    if (this.currentTabId === tabId) return;

    this.currentTabId = tabId;
  }
}
