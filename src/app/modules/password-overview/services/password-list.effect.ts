import { PasswordInfoBuilder } from './../../../core/models/password-info.model.builder';
import { PasswordListActionTypes, PasswordListActionsUnion, PasswordListActions } from './password-list.action';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { switchMap, delay } from 'rxjs/operators';

import { AppState } from '../../../core/store/app.store';
import { PasswordInfo } from '../../../core/models/password-info.model';

@Injectable()
export class PasswordListEffects {
  constructor(private action$: Actions, private store: Store<AppState>) {}

  @Effect()
  loadPasswordList$ = this.action$.pipe(
    ofType(PasswordListActionTypes.Load),
    switchMap((action: PasswordListActionsUnion) => {
        const passwordInfos: PasswordInfo[] = [];

        const passwordInfo1 = new PasswordInfoBuilder()
            .withTitle('Title')
            .withEmailOrUsername('UserName')
            .withPassword('password')
            .withWebsite('website.com')
            .build();

        passwordInfo1.createdAt = new Date('2019-12-31');

        const passwordInfo2 = new PasswordInfoBuilder()
            .withTitle('NoTitle')
            .withEmailOrUsername('thlinh')
            .withWebsite('Idontknow.com')
            .withPassword('abcd')
            .build();

        passwordInfos.push(passwordInfo1);
        passwordInfos.push(passwordInfo2);
      return [new PasswordListActions.LoadComplete({passwordList: passwordInfos})];
    })
  );
}
