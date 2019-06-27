import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { PasswordInfo } from '../../../../core/models/password-info.model';
import { AppState } from '../../../../core/store/app.store';
import { PasswordListSelector } from '../../services/password-list.selector';
import { PasswordInfoBuilder } from './../../../../core/models/password-info.model.builder';
import { PasswordListActions } from '../../services/password-list.action';

@Component({
  selector: 'sucre-password-detail-page',
  templateUrl: './password-detail-page.component.html',
    styleUrls: ['./password-detail-page.component.scss']
})
export class PasswordDetailPageComponent implements OnInit {
    passwordInfos$: Observable<PasswordInfo[]> = this.store.select(
        PasswordListSelector.getPasswordList
    );

    hide = true;

    public readonly passwordInfo: PasswordInfo = new PasswordInfoBuilder().emptyInstance();

    constructor(private store: Store<AppState>,
                private router: Router) { }

    ngOnInit(): void {
    }

    handleSave(): void {
        this.passwordInfo.createdAt = new Date();
        this.store.dispatch(new PasswordListActions.AddPassword({newPassword: this.passwordInfo}));
        this.handleCancel();
    }

    handleCancel(): void {
        this.router.navigate(['password-overview']);
    }
}
