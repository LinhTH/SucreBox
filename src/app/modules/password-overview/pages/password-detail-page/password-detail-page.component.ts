import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { PasswordInfo } from '../../../../core/models/password-info.model';
import { AppState } from '../../../../core/store/reducer';
import { PasswordListSelector } from '../../services/password-list.selector';

@Component({
  selector: 'sucre-password-detail-page',
  templateUrl: './password-detail-page.component.html',
    styleUrls: ['./password-detail-page.component.css']
})
export class PasswordDetailPageComponent {
    passwordInfos$: Observable<PasswordInfo[]> = this.store.select(
        PasswordListSelector.getPasswordList
    );

    constructor(private store: Store<AppState>) { }
}
