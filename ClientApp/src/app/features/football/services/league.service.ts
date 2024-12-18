import { Injectable } from '@angular/core';
import { BaseService } from '../../../core/services/base/base-service.service';
import { Observable, of } from 'rxjs';
import { LeagueViewModel } from '../models/view-model/league.view-model';
import { leagueData } from '../../../data/league.fake-data';

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
