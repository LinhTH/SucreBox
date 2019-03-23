import { PasswordOverviewPageComponent } from './pages/password-overview-page.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const passwordOverviewRoutes = [
  {
    path: 'password-overview',
    component: PasswordOverviewPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(passwordOverviewRoutes)],
  exports: [RouterModule]
})
export class PasswordOverviewRoutingModule {}
