import { Component, Input } from '@angular/core';
import { MatchViewModel } from '@model/view/football';

@Component({
  selector: 'app-football-lineup',
  standalone: true,
  imports: [],
  templateUrl: './football-lineup.component.html',
  styleUrl: './football-lineup.component.scss',
})
export class FootballLineupComponent {
  @Input() match!: MatchViewModel;
}
