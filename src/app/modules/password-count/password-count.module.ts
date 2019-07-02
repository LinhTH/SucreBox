import { PasswordOverviewStoreModule } from './../password-overview/store/password-overview-store.module';
import { PasswordCountRoutingModule } from './password-count.routing';
import { PasswordCountPageComponent } from './containers/password-count-page.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    PasswordCountRoutingModule,
    PasswordOverviewStoreModule
  ],
  declarations: [PasswordCountPageComponent]
})
export class PasswordCountModule {}
