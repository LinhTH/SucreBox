import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@Component({
  template: `
    NOT FOUND
  `
})
export class NotFoundComponent {}

const AppRoutes: Routes = [
  {
    path: 'password-overview',
    loadChildren: './modules/password-overview/password-overview.module#PasswordOverviewModule'
  },
  {
    path: 'password-count',
    loadChildren:
      './modules/password-count/password-count.module#PasswordCountModule'
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    RouterModule.forRoot(AppRoutes, {
      // These aren't necessary for this demo - they are just here to provide
      // a more natural experience and test harness.
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      enableTracing: false
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
