import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { MaterialFrameWorkModule } from './core/modules/material-framework.module';
import { PasswordOverviewModule } from './modules/password-overview/password-overview.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    MaterialFrameWorkModule,
    PasswordOverviewModule,
    AppRoutingModule,
    // ComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
