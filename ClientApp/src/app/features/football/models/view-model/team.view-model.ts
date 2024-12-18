export class TeamViewModel {
  public id!: number;
  public leagueId!: number;

  public name!: string;
  public logo?: string;

  constructor(data: Partial<TeamViewModel>) {
    Object.assign(this, data);
  }
}
