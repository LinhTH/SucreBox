import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../../../core/store/reducer';
import { PasswordInfo } from './../../../core/models/password-info.model';
import { PasswordListSelector } from './../services/password-list.selector';

@Component({
  selector: 'sucre-password-overview-page',
  templateUrl: './password-overview-page.component.html',
  styleUrls: ['password-overview-page.component.css']
})
export class PasswordOverviewPageComponent {
  passwordInfos$: Observable<PasswordInfo[]> = this.store.select(
    PasswordListSelector.getPasswordList
  );

  displayedColumns: string[] = ['Title', 'Username', 'Password'];

  constructor(private store: Store<AppState>) {}
}
