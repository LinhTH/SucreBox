import { PasswordDetailPageComponent } from './containers/password-detail-page/password-detail-page.component';
import { PasswordListLoader } from './store/loaders/password-list.loader';
import { PasswordOverviewPageComponent } from './containers/password-overview-page/password-overview-page.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const passwordOverviewRoutes = [
  {
    path: '',
    component: PasswordOverviewPageComponent,
    canActivate: [PasswordListLoader]
  },
  {
    path: 'detail',
    component: PasswordDetailPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(passwordOverviewRoutes)],
  providers: [PasswordListLoader]
})
export class PasswordOverviewRoutingModule {}
