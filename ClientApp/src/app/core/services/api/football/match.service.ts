import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { matchData } from '@fake-data';

import { MatchStatusEnum } from '@enum/football';
import { MatchEvent } from '@model/api/football';
import {
  MatchViewModel,
  MatchEventViewModel,
  LineupViewModel,
} from '@model/view/football';
import { BaseService } from '@service/base';

@Injectable({
  providedIn: 'root',
})
export class MatchService extends BaseService {
  public getMatches(): Observable<MatchViewModel[]> {
    const matchVMs = matchData
      .filter((x) => x.status === MatchStatusEnum.Completed)
      .sort(
        (a: MatchViewModel, b: MatchViewModel) =>
          b.date.getTime() - a.date.getTime()
      )
      .map(
        (match) =>
          new MatchViewModel({
            ...match,
            matchEvents: match.matchEvents?.map(
              (e: MatchEvent) => new MatchEventViewModel(e)
            ),
            lineup: match.lineup ? new LineupViewModel(match.lineup) : {},
          })
      );
    return of(matchVMs);
  }

  public getMatchesByLeagueId(leagueId: number): Observable<MatchViewModel[]> {
    const matchVMs = matchData
      .filter(
        (x) => x.leagueId === leagueId && x.status === MatchStatusEnum.Completed
      )
      .sort(
        (a: MatchViewModel, b: MatchViewModel) =>
          b.date.getTime() - a.date.getTime()
      )
      .map(
        (match) =>
          new MatchViewModel({
            ...match,
            matchEvents: match.matchEvents?.map(
              (e: MatchEvent) => new MatchEventViewModel(e)
            ),
            lineup: match.lineup ? new LineupViewModel(match.lineup) : {},
          })
      );
    return of(matchVMs);
  }

  public getUpcomingMatches(leagueId: number): Observable<MatchViewModel[]> {
    const matchVMs = matchData
      .filter(
        (x) => x.leagueId === leagueId && x.status === MatchStatusEnum.NotStart
      )
      .sort(
        (a: MatchViewModel, b: MatchViewModel) =>
          b.date.getTime() - a.date.getTime()
      )
      .map(
        (match) =>
          new MatchViewModel({
            ...match,
            matchEvents: match.matchEvents?.map(
              (e: MatchEvent) => new MatchEventViewModel(e)
            ),
            lineup: match.lineup ? new LineupViewModel(match.lineup) : {},
          })
      );
    return of(matchVMs);
  }

  public getMatchById(matchId: number): Observable<MatchViewModel | undefined> {
    const match = matchData.find((x) => x.id === matchId);
    const matchVM = match
      ? new MatchViewModel({
          ...match,
          matchEvents: match.matchEvents?.map(
            (e: MatchEvent) => new MatchEventViewModel(e)
          ),
          lineup: match.lineup ? new LineupViewModel(match.lineup) : {},
        })
      : undefined;
    return of(matchVM);
  }

  public getLatestMatch(
    leagueId: number
  ): Observable<MatchViewModel | undefined> {
    const matches = matchData
      .filter(
        (x) => x.leagueId === leagueId && x.status === MatchStatusEnum.Completed
      )
      .sort(
        (a: MatchViewModel, b: MatchViewModel) =>
          b.date.getTime() - a.date.getTime()
      );

    if (matches.length === 0) return of(undefined);

    const latestMatch = matches[0];

    const matchVM = latestMatch
      ? new MatchViewModel({
          ...latestMatch,
          matchEvents: latestMatch.matchEvents?.map(
            (e: MatchEvent) => new MatchEventViewModel(e)
          ),
          lineup: latestMatch.lineup
            ? new LineupViewModel(latestMatch.lineup)
            : {},
        })
      : undefined;
    return of(matchVM);
  }
}
