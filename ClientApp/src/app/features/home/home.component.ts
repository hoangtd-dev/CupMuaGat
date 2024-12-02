import { Component } from '@angular/core';
import { FootballDashboardComponent } from '../football/football-dashboard/football-dashboard.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FootballDashboardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
