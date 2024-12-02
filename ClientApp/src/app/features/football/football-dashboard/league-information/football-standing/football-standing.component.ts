import { MatTableModule } from '@angular/material/table';
import { Component } from '@angular/core';

@Component({
  selector: 'app-football-standing',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './football-standing.component.html',
  styleUrl: './football-standing.component.scss',
})
export class FootballStandingComponent {
  public readonly displayedColumns: string[] = [
    'position',
    'team',
    'point',
    'win-draw-lose',
  ];

  public dataSource = [
    { position: 1, team: 'Đội Trẻ', point: 6, win: 2, lose: 0, draw: 0 },
    { position: 2, team: 'Đội Già', point: 0, win: 0, lose: 2, draw: 0 },
  ];
}
