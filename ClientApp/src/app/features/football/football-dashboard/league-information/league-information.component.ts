import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FootballHistoryComponent } from './football-history/football-history.component';
import { FootballStandingComponent } from './football-standing/football-standing.component';

@Component({
  selector: 'app-league-information',
  standalone: true,
  imports: [CommonModule, FootballHistoryComponent, FootballStandingComponent],
  templateUrl: './league-information.component.html',
  styleUrl: './league-information.component.scss',
})
export class LeagueInformationComponent {
  public readonly tabs: any[] = [
    {
      id: 'stats',
      name: 'Bảng xếp hạng',
      icon: 'trophy',
    },
    {
      id: 'history',
      name: 'Lịch sử',
      icon: 'history',
    },
  ];
  public currentTabId!: string;

  constructor() {
    this.currentTabId = this.tabs[0].id;
  }

  public setTab(tabId: string): void {
    if (this.currentTabId === tabId) return;

    this.currentTabId = tabId;
  }
}
