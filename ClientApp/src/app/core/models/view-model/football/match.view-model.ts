import { UserViewModel } from '../user.view-model';
import { TeamViewModel } from './team.view-model';

import { MatchEventEnum, MatchStatusEnum } from '@enum/football';

export class MatchViewModel {
  public id!: number;
  public leagueId!: number;

  public homeId!: number;
  public home?: TeamViewModel;
  public homeScore!: number;

  public awayId!: number;
  public away?: TeamViewModel;
  public awayScore!: number;

  public status!: MatchStatusEnum;

  public matchEvents?: MatchEventViewModel[];
  public lineup?: LineupViewModel;
  public location?: string;

  public date!: Date;

  constructor(data: Partial<MatchViewModel>) {
    Object.assign(this, data);
  }
}

export class MatchEventViewModel {
  // public id!: number;

  public eventType!: MatchEventEnum;

  public teamId!: number;
  public team?: TeamViewModel;
  public userId!: number;
  public user?: UserViewModel;

  public time!: number;

  constructor(data: Partial<MatchEventViewModel>) {
    Object.assign(this, data);
  }
}

export class LineupViewModel {
  public homeGkId?: number;
  public homeGk?: UserViewModel;

  public homeDfIds?: number[];
  public homeDfs?: UserViewModel[] = [];

  public homeStIds?: number[];
  public homeSts?: UserViewModel[] = [];

  public homeSubstituteIds?: number[];
  public homeSubstitutes?: UserViewModel[] = [];

  public awayGkId?: number;
  public awayGk?: UserViewModel;

  public awayDfIds?: number[];
  public awayDfs?: UserViewModel[] = [];

  public awayStIds?: number[];
  public awaySts?: UserViewModel[] = [];

  public awaySubstituteIds?: number[];
  public awaySubstitutes?: UserViewModel[] = [];

  constructor(data: Partial<LineupViewModel>) {
    Object.assign(this, data);
  }
}
