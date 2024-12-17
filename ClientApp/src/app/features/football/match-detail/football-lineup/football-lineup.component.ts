import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-football-lineup',
  standalone: true,
  imports: [],
  templateUrl: './football-lineup.component.html',
  styleUrl: './football-lineup.component.scss',
})
export class FootballLineupComponent {
  public homeLineup: any = {
    gk: { name: 'Hoang Tran' },
    df: [{ name: 'Trong Vu' }, { name: 'Tommy Siu' }],
    st: [{ name: 'Khang' }, { name: 'Ksor Duc' }],
  };

  public awayLineup: any = {
    gk: { name: 'Nay Danh' },
    df: [{ name: 'Trong Thai' }, { name: 'Hien Tao' }],
    st: [{ name: 'Binzema' }, { name: 'Chinese' }],
  };
}
