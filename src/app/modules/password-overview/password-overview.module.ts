import { MaterialFrameWorkModule } from './../../core/modules/material-framework.module';
import { PasswordOverviewRoutingModule } from './password-overview.routing';
import { PasswordOverviewPageComponent } from './pages/password-overview-page.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [PasswordOverviewPageComponent],
  imports: [
    MaterialFrameWorkModule,
    PasswordOverviewRoutingModule
  ],
  exports: [PasswordOverviewPageComponent]
})
export class PasswordOverviewModule {}
