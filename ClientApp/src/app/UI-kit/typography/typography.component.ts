import { Component } from '@angular/core';

@Component({
  selector: 'app-typography',
  standalone: true,
  imports: [],
  templateUrl: './typography.component.html',
  styleUrl: './typography.component.scss',
})
export class TypographyComponent {
  public themeName = 'primary-theme';
  public shades = [
    'primary-100',
    'primary-200',
    'primary-300',
    'primary-400',
    'primary-500',
    'primary-600',
    'primary-700',
    'primary-800',
    'primary-900',
  ];
}
