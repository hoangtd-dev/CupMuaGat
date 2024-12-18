import { MatchEventEnum } from '../../enums/match-event.enum';
import { MatchStatusEnum } from '../../enums/match-status.enum';

export class Match {
  public id!: number;
  public leagueId!: number;

  public homeId!: number;
  public homeScore!: number;

  public awayId!: number;
  public awayScore!: number;

  public status!: MatchStatusEnum;

  public matchEvents?: MatchEvent[];

  public lineup?: Lineup;
  public date!: Date;
  public location?: string;

  constructor(data: Partial<Match>) {
    Object.assign(this, data);
  }
}

export class MatchEvent {
  // public id!: number;

  public eventType!: MatchEventEnum;

  public teamId!: number;
  public userId!: number;

  public time!: number;

  constructor(data: Partial<MatchEvent>) {
    Object.assign(this, data);
  }
}

export class Lineup {
  public homeGkId?: number;
  public homeDfIds?: number[];
  public homeStIds?: number[];
  public homeSubstituteIds?: number[];

  public awayGkId?: number;
  public awayDfIds?: number[];
  public awayStIds?: number[];
  public awaySubstituteIds?: number[];
}
