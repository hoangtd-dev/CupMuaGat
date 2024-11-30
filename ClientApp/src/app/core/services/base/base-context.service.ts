import { Observable, Subject } from 'rxjs';

export class BaseContextService<TData> {
  protected data: Subject<TData> = new Subject();

  protected updateData(data: TData): void {
    this.data.next(data);
  }

  protected getData(): Observable<TData> {
    return this.data.asObservable();
  }
}
