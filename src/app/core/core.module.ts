import { NgModule } from '@angular/core';
import { MaterialFrameWorkModule } from './modules/material-framework.module';
import { StoreModule } from '@ngrx/store';
import { appReducers, metaReducers } from './store/app.store';

@NgModule({
    imports: [
        StoreModule.forRoot(appReducers, { metaReducers }),
    ],
    exports: [
        MaterialFrameWorkModule,
        StoreModule,
    ]
})
export class CoreModule {}
