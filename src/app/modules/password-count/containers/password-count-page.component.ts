import { PasswordListActions } from './../../password-overview/store/actions/password-list.action';
import { PasswordInfo } from './../../../core/models/password-info.model';
import { PasswordListSelector } from './../../password-overview/store/selectors/password-list.selector';
import { Store, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { AppState } from '../../../core/store/app.store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';

@Component({
  selector: 'sucre-password-count-page',
  templateUrl: './password-count-page.component.html'
})
export class PasswordCountPageComponent implements OnInit {
  passwordCount$: Observable<number> = this.store.pipe(
    select(PasswordListSelector.getPasswordList),
    map((passwordList: PasswordInfo[]) => {
      return _.size(passwordList);
    })
  );

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select(PasswordListSelector.getPasswordListLoaded)
      .subscribe((loaded: boolean) => {
        if (!loaded) {
          this.store.dispatch(new PasswordListActions.Load());
        }
      });
  }
}
