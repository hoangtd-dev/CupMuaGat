import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { userData } from '@fake-data';

import { BaseService } from '@service/base';
import { UserViewModel } from '@model/view/user.view-model';

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
