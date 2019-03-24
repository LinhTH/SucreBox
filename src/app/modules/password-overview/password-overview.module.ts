import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CoreModule } from './../../core/core.module';
import { PasswordOverviewPageComponent } from './pages/password-overview-page.component';
import { PasswordOverviewRoutingModule } from './password-overview.routing';
import { EffectsModule } from '@ngrx/effects';
import { PasswordListEffects } from './services/password-list.effect';

@NgModule({
  declarations: [PasswordOverviewPageComponent],
  imports: [
    CommonModule,
    CoreModule,
    PasswordOverviewRoutingModule,
    EffectsModule.forFeature([PasswordListEffects]),
  ],
  exports: [PasswordOverviewPageComponent]
})
export class PasswordOverviewModule {}
