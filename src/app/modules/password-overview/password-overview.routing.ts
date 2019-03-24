import { PasswordListLoader } from './services/password-list.loader';
import { PasswordOverviewPageComponent } from './pages/password-overview-page.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const passwordOverviewRoutes = [
  {
    path: 'password-overview',
    component: PasswordOverviewPageComponent,
    canActivate: [
      PasswordListLoader
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(passwordOverviewRoutes)],
  exports: [RouterModule],
  providers: [PasswordListLoader]
})
export class PasswordOverviewRoutingModule {}
