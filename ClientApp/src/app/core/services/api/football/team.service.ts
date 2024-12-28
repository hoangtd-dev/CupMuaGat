import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { teamData } from '@fake-data';

import { TeamViewModel } from '@model/view/football';
import { BaseService } from '@service/base';

@Injectable({
  providedIn: 'root',
})
export class TeamService extends BaseService {
  public getTeams(): Observable<TeamViewModel[]> {
    const teamVMs = teamData.map((team) => new TeamViewModel(team));
    return of(teamVMs);
  }

  public getTeamsByLeagueId(leagueId: number): Observable<TeamViewModel[]> {
    const teamVMs = teamData
      .filter((x) => x.leagueId === leagueId)
      .map((team) => new TeamViewModel(team));
    return of(teamVMs);
  }

  public getTeamById(id: number): Observable<TeamViewModel | undefined> {
    const team = teamData.find((x) => x.id === id);
    const teamVM = team ? new TeamViewModel(team) : undefined;
    return of(teamVM);
  }
}
