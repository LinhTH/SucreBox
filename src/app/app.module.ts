import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MaterialFrameWorkModule } from './core/modules/material-framework.module';
import { ComponentsModule } from './components/components.module';
import { CommonModule } from '@angular/common';
import { PasswordOverviewPageComponent } from './containers/password-overview-page/password-overview-page.component';
import { ContainersModule } from './containers/containers.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MaterialFrameWorkModule,
    ContainersModule,
    // ComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
