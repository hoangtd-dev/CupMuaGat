import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './features/header/header.component';
import { HomeComponent } from './features/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
