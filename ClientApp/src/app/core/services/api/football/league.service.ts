import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { leagueData } from '@fake-data';

import { LeagueViewModel } from '@model/view/football';
import { BaseService } from '@service/base';

@Injectable({
  providedIn: 'root',
})
export class LeagueService extends BaseService {
  public getLeagues(): Observable<LeagueViewModel[]> {
    const leagueVMs = leagueData.map((team) => new LeagueViewModel(team));
    return of(leagueVMs);
  }

  public getLeagueById(id: number): Observable<LeagueViewModel | undefined> {
    const league = leagueData.find((x) => x.id === id);

    const leagueVM = league ? new LeagueViewModel(league) : undefined;
    return of(leagueVM);
  }
}
