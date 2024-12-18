import { Injectable } from '@angular/core';
import { BaseService } from '../base/base-service.service';
import { Observable, of } from 'rxjs';
import { UserViewModel } from '../../models/view-model/user.view-model';
import { userData } from '../../../data/user.fake-data';

@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseService {
  public getUsers(): Observable<UserViewModel[]> {
    const userVMs = userData.map((user) => new UserViewModel(user));
    return of(userVMs);
  }

  public getUsersByIds(ids: number[]): Observable<UserViewModel[]> {
    const userVMs = userData
      .filter((u) => ids.includes(u.id))
      .map((user) => new UserViewModel(user));
    return of(userVMs);
  }
}
