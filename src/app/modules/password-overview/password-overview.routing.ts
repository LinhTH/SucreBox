import { PasswordDetailPageComponent } from './pages/password-detail-page/password-detail-page.component';
import { PasswordListLoader } from './store/loaders/password-list.loader';
import { PasswordOverviewPageComponent } from './pages/password-overview-page/password-overview-page.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const passwordOverviewRoutes = [
  {
    path: 'password-overview',
    component: PasswordOverviewPageComponent,
    canActivate: [
      PasswordListLoader
    ],
  },
  {
    path: 'password-detail',
    component: PasswordDetailPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(passwordOverviewRoutes)],
  providers: [PasswordListLoader],
  exports: [RouterModule]
})
export class PasswordOverviewRoutingModule {}
