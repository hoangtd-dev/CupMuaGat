import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './features/header/header.component';
import { HomeComponent } from './features/home/home.component';
import { CommonModule } from '@angular/common';
import { TypographyComponent } from './UI-kit/typography/typography.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, HomeComponent, TypographyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
