import { Injectable, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, Observable, Subscription } from 'rxjs';
import { switchMap, take, tap } from 'rxjs/operators';

import { AppState } from '../../../core/store/app.store';
import { PasswordListActions } from '../store/actions/password-list.action';
import { PasswordListSelector } from '../store/selectors/password-list.selector';

@Injectable()
export class PasswordListLoader implements OnDestroy {
  private subscription: Subscription;

  constructor(private store: Store<AppState>) {}

  private _loadDate = (): Observable<[boolean, boolean]> => {
    return combineLatest(
      this.store.select(PasswordListSelector.getPasswordListLoaded),
      this.store.select(PasswordListSelector.getPasswordListLoading)
    ).pipe(
      tap(([isLoaded, isLoading]: [boolean, boolean]) => {
        if (!isLoaded && !isLoading) {
          this.store.dispatch(new PasswordListActions.Load());
        }
      }),
      take(1)
    );
  }

  canActivate(): boolean {
    if (!this.subscription) {
      this.subscription = this._loadDate().subscribe();
    }
    return true;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
