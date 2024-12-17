import { Component } from '@angular/core';

@Component({
  selector: 'app-football-history',
  standalone: true,
  imports: [],
  templateUrl: './football-history.component.html',
  styleUrl: './football-history.component.scss',
})
export class FootballHistoryComponent {
  public histories: any[] = [
    {
      home: 'Đội Trẻ',
      homeLogo: 'assets/young-team.png',
      homeScore: 4,
      away: 'Đội Già',
      awayScore: 4,
      awayLogo: 'assets/old-team.png',
    },
    {
      home: 'Đội Trẻ',
      homeLogo: 'assets/young-team.png',
      homeScore: 4,
      away: 'Đội Già',
      awayScore: 4,
      awayLogo: 'assets/old-team.png',
    },
  ];
}
