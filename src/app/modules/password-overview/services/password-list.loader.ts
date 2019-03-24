import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { switchMap, take, tap } from 'rxjs/operators';

import { AppState } from '../../../core/store/reducer';
import { PasswordListActions } from './password-list.action';
import { PasswordListSelector } from './password-list.selector';

@Injectable()
export class PasswordListLoader {
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

  canActivate(): Observable<boolean> {
    return this._loadDate().pipe(switchMap(() => [true]));
  }
}
