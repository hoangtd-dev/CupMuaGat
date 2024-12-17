import { Component } from '@angular/core';
import { MatchCardComponent } from '../../../match-card/match-card.component';

@Component({
  selector: 'app-football-history',
  standalone: true,
  imports: [MatchCardComponent],
  templateUrl: './football-history.component.html',
  styleUrl: './football-history.component.scss',
})
export class FootballHistoryComponent {
  public matches: any[] = [
    {
      id: 1,
      home: 'Đội Trẻ',
      homeLogo: 'assets/young-team.png',
      homeScore: 4,
      away: 'Đội Già',
      awayScore: 4,
      awayLogo: 'assets/old-team.png',
    },
    {
      id: 2,
      home: 'Đội Trẻ',
      homeLogo: 'assets/young-team.png',
      homeScore: 4,
      away: 'Đội Già',
      awayScore: 4,
      awayLogo: 'assets/old-team.png',
    },
  ];
}
