import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FootballDashboardComponent } from './football-dashboard/football-dashboard.component';
import { FootballComponent } from './football.component';
import { MatchDetailComponent } from './match-detail/match-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'leagues',
    pathMatch: 'full',
  },
  {
    path: 'leagues',
    component: FootballComponent,
    children: [
      {
        path: ':id',
        component: FootballDashboardComponent,
      },
      {
        path: ':id/matches/:matchId',
        component: MatchDetailComponent,
      },
    ],
  },

  // {
  //   path: 'details',
  //   loadComponent: () =>
  //     import('./football-details.component').then((m) => m.FootballDetailsComponent),
  // }, // Lazy-loaded standalone component
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FootballRoutingModule {}
