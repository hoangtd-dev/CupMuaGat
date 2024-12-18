import { Component, Input } from '@angular/core';
import { LineupViewModel, MatchViewModel } from '../../models/view-model/match.view-model';

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
