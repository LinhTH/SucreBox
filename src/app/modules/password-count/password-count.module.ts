import { PasswordCountRoutingModule } from './password-count.routing';
import { PasswordCountPageComponent } from './containers/password-count-page.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
      CommonModule,
      PasswordCountRoutingModule
    ],
  declarations: [PasswordCountPageComponent]
})
export class PasswordCountModule {}
