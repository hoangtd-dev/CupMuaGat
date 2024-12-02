import { MatchStatusEnum } from '../enums/match-status.enum';

export class MatchViewModel {
  public id!: number;

  public homeId!: number;
  public homeScore!: number;

  public awayId!: number;
  public awayScore!: number;

  public status!: MatchStatusEnum;

  public matchEvent!: MatchEventViewModel[];
}

export class MatchEventViewModel {
  public id!: number;
  public type!: string;
}
