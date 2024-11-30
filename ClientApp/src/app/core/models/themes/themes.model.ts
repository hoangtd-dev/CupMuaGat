export class Theme {
  public id!: string;
  public name!: string;

  constructor(theme: Partial<Theme>) {
    Object.assign(this, theme);
  }
}
