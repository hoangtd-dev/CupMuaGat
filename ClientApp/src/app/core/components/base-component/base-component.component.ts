import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';

@Injectable()
export abstract class BaseComponent implements OnDestroy {
  private subscriptions = new Subscription();

  protected subscribe(
    observable: Observable<any>,
    observerOrNext?: Partial<Observer<any>> | ((value: any) => void) | undefined
  ): Subscription {
    const subscription = observable.subscribe(observerOrNext);
    this.subscriptions.add(subscription);
    return subscription;
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
