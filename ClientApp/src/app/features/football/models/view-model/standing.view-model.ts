export class StandingViewModel {
  public teamId!: number;
  public team!: string;
  public point?: number;

  public win?: number;
  public lose?: number;
  public draw?: number;

  constructor(data: Partial<StandingViewModel>) {
    Object.assign(this, data);
  }

  public static createFromTeam(id: number, name: string): StandingViewModel {
    return new StandingViewModel({
      teamId: id,
      team: name,
      point: 0,
      win: 0,
      lose: 0,
      draw: 0,
    });
  }
}
