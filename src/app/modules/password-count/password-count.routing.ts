import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PasswordCountPageComponent } from './containers/password-count-page.component';

const passwordCountRoutes = [
  {
    path: '',
    component: PasswordCountPageComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(passwordCountRoutes)],
  exports: [RouterModule]
})
export class PasswordCountRoutingModule {}
