import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FootballDashboardComponent } from './football-dashboard/football-dashboard.component';
import { FootballComponent } from './football.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'league',
    pathMatch: 'full',
  },
  {
    path: 'league',
    component: FootballComponent,
    children: [{ path: '', component: FootballDashboardComponent }],
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
