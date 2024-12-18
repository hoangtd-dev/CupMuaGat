import { Injectable } from '@angular/core';
import { BaseService } from '../../../core/services/base/base-service.service';
import { Observable, of } from 'rxjs';
import { teamData } from '../../../data/team.fake-data';
import { TeamViewModel } from '../models/view-model/team.view-model';

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
