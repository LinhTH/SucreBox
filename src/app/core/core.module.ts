import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { appReducers, metaReducers } from './store/app.store';

@NgModule({
  imports: [
    StoreModule.forRoot(appReducers, { metaReducers }),
    EffectsModule.forRoot([])
  ]
})
export class CoreModule {}
