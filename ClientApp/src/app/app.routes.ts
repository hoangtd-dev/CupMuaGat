import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { TypographyComponent } from './UI-kit/typography/typography.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'ui-kit', component: TypographyComponent },
  {
    path: 'football',
    loadChildren: () =>
      import('./features/football/football.routes').then(
        (m) => m.FootballRoutingModule
      ),
  },
  { path: '**', redirectTo: '' },
];
