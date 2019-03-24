import { PasswordDetailPageComponent } from './pages/password-detail-page/password-detail-page.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CoreModule } from './../../core/core.module';
import { PasswordOverviewPageComponent } from './pages/password-overview-page/password-overview-page.component';
import { PasswordOverviewRoutingModule } from './password-overview.routing';
import { EffectsModule } from '@ngrx/effects';
import { PasswordListEffects } from './services/password-list.effect';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [PasswordOverviewPageComponent, PasswordDetailPageComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    CoreModule,
    PasswordOverviewRoutingModule,
    EffectsModule.forFeature([PasswordListEffects])
  ]
})
export class PasswordOverviewModule {}
