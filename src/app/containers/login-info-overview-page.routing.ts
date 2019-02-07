import { LoginInfoOverviewPageComponent } from './login-info-overview-page/login-info-overview-page.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const loginInfoModuleRoutes = [
  {
    path: 'login-info',
    component: LoginInfoOverviewPageComponent,
    children: [
      {
        path: ':id',
        component: LoginInfoOverviewPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(loginInfoModuleRoutes)],
  exports: [RouterModule]
})
export class LoginInfoRoutingModule {}
