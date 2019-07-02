import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { PasswordListEffects } from './effects/password-list.effect';
import { FEATURE_STORE_NAME, passwordOverviewReducers } from './reducers';

@NgModule({
  imports: [
    StoreModule.forFeature(FEATURE_STORE_NAME, passwordOverviewReducers),
    EffectsModule.forFeature([PasswordListEffects])
  ]
})
export class PasswordOverviewStoreModule {}
