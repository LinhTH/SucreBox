import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../../../../core/store/app.store';
import { PasswordInfo } from '../../../../core/models/password-info.model';
import { PasswordListSelector } from '../../services/password-list.selector';
import { Router } from '@angular/router';

@Component({
  selector: 'sucre-password-overview-page',
  templateUrl: './password-overview-page.component.html',
  styleUrls: ['password-overview-page.component.css']
})
export class PasswordOverviewPageComponent {
  passwordInfos$: Observable<PasswordInfo[]> = this.store.select(
    PasswordListSelector.getPasswordList
  );

  hide = true;

  displayedColumns: string[] = ['Title', 'Username', 'Password'];

  constructor(private store: Store<AppState>, private router: Router) {}

  addNewPassword(): void {
    this.router.navigate(['password-detail']);
  }
}
