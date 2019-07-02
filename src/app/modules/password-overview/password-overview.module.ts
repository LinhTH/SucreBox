import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MaterialFrameWorkModule } from './../../share/material-framework.module';
import { PasswordDetailPageComponent } from './containers/password-detail-page/password-detail-page.component';
import { PasswordOverviewPageComponent } from './containers/password-overview-page/password-overview-page.component';
import { PasswordOverviewRoutingModule } from './password-overview.routing';
import { PasswordOverviewStoreModule } from './store/password-overview-store.module';

@NgModule({
  declarations: [PasswordOverviewPageComponent, PasswordDetailPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialFrameWorkModule,
    PasswordOverviewRoutingModule,
    PasswordOverviewStoreModule,
  ]
})
export class PasswordOverviewModule {}
