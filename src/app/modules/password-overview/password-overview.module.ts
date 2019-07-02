import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { MaterialFrameWorkModule } from './../../share/material-framework.module';
import { PasswordDetailPageComponent } from './containers/password-detail-page/password-detail-page.component';
import { PasswordOverviewPageComponent } from './containers/password-overview-page/password-overview-page.component';
import { PasswordOverviewRoutingModule } from './password-overview.routing';
import { PasswordListEffects } from './store/effects/password-list.effect';
import { FEATURE_STORE_NAME, passwordOverviewReducers } from './store/reducers';

@NgModule({
  declarations: [PasswordOverviewPageComponent, PasswordDetailPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialFrameWorkModule,
    PasswordOverviewRoutingModule,
    StoreModule.forFeature(FEATURE_STORE_NAME, passwordOverviewReducers),
    EffectsModule.forFeature([PasswordListEffects])
  ]
})
export class PasswordOverviewModule {}
