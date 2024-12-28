import { MatchViewModel } from './match.view-model';

export class LeagueViewModel {
  public id!: number;
  public name!: string;
  public matches!: MatchViewModel[];

  constructor(data: Partial<LeagueViewModel>) {
    Object.assign(this, data);
  }
}
