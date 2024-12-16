import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-football',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './football.component.html',
  styleUrl: './football.component.scss',
})
export class FootballComponent {}
