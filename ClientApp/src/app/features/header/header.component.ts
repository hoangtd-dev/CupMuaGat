import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public isMenuOpen = false;

  @ViewChild('navigation') navigationEl!: ElementRef<HTMLDivElement>;

  public triggerMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;

    this.isMenuOpen
      ? this.navigationEl.nativeElement.classList.add('open')
      : this.navigationEl.nativeElement.classList.remove('open');
  }
}
