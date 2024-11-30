import { ThemeModeEnum } from './../../core/enums/themes.enum';
import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ThemesService } from '../../core/services/themes.service';
import { BaseComponent } from '../../core/components/base-component/base-component.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent extends BaseComponent implements OnInit {
  public readonly ThemeModeEnum = ThemeModeEnum;
  public isMenuOpen = false;
  public themeMode!: ThemeModeEnum;

  @ViewChild('navigation') navigationEl!: ElementRef<HTMLDivElement>;

  constructor(private readonly _themesService: ThemesService) {
    super();
  }

  ngOnInit(): void {
    this.getCurrentThemeMode();
  }

  private getCurrentThemeMode(): void {
    this.subscribe(this._themesService.getCurrentThemeMode(), {
      next: (themeMode) => {
        this.themeMode = themeMode;
      },
    });
  }

  public triggerMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;

    this.isMenuOpen
      ? this.navigationEl.nativeElement.classList.add('open')
      : this.navigationEl.nativeElement.classList.remove('open');
  }

  public updateTheme(): void {
    const newThemeMode =
      this.themeMode === ThemeModeEnum.Light
        ? ThemeModeEnum.Dark
        : ThemeModeEnum.Light;

    this._themesService.updateThemeMode(newThemeMode);
  }
}
