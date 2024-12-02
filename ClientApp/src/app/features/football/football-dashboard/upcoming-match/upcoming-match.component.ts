import { Component } from '@angular/core';

@Component({
  selector: 'app-upcoming-match',
  standalone: true,
  imports: [],
  templateUrl: './upcoming-match.component.html',
  styleUrl: './upcoming-match.component.scss',
})
export class UpcomingMatchComponent {
  public match: any = {
    home: 'Đội Trẻ',
    away: 'Đội Già',
    date: '10 January, 2024',
    location: 'Sân bóng Matheson',
  };
}
