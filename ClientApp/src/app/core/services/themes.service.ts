import { Injectable } from '@angular/core';
import { BaseContextService } from './base/base-context.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { ThemeEnum, ThemeModeEnum } from '../enums/themes.enum';

@Injectable({
  providedIn: 'root',
})
export class ThemesService extends BaseContextService<ThemeEnum> {
  private readonly _themeModeKey = 'theme-mode-key';
  private readonly _themeKey = 'theme-key';

  private _currentThemeMode: BehaviorSubject<ThemeModeEnum> =
    new BehaviorSubject<ThemeModeEnum>(ThemeModeEnum.Light);

  private _currentTheme: BehaviorSubject<ThemeEnum> =
    new BehaviorSubject<ThemeEnum>(ThemeEnum.Primary);

  constructor() {
    super();
    this._loadTheme();
    this._loadThemeMode();
  }

  private _loadTheme(): void {
    let currentTheme = localStorage.getItem(this._themeKey) as ThemeEnum;

    // Remove
    currentTheme = ThemeEnum.Primary;

    if (currentTheme) {
      this.updateTheme(currentTheme);
    }
  }

  private _loadThemeMode(): void {
    const currentThemeMode = localStorage.getItem(
      this._themeModeKey
    ) as ThemeModeEnum;

    if (currentThemeMode) {
      this.updateThemeMode(currentThemeMode);
    }
  }

  public getCurrentThemeMode(): Observable<ThemeModeEnum> {
    return this._currentThemeMode.asObservable();
  }

  public updateTheme(selectedTheme: ThemeEnum): void {
    this._currentTheme.next(selectedTheme);
    localStorage.setItem(this._themeKey, selectedTheme);

    if (selectedTheme === ThemeEnum.Primary) {
      document.body.classList.add(ThemeEnum.Primary);
    }
  }

  public updateThemeMode(selectedThemeMode: ThemeModeEnum): void {
    this._currentThemeMode.next(selectedThemeMode);
    localStorage.setItem(this._themeModeKey, selectedThemeMode);

    if (selectedThemeMode === ThemeModeEnum.Light) {
      document.body.classList.add(ThemeModeEnum.Light);
      document.body.classList.remove(ThemeModeEnum.Dark);
    } else {
      document.body.classList.add(ThemeModeEnum.Dark);
      document.body.classList.remove(ThemeModeEnum.Light);
    }
  }
}
