import { ListBasicComponent } from './components/list-basic/list-basic.component';
import { LoginInfoOverviewPageComponent } from './containers/login-info-overview-page/login-info-overview-page.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@Component({
    template: `NOT FOUND`
})
export class NotFoundComponent { }

const AppRoutes: Routes = [
    { path: '', redirectTo: '/login-info', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent}
];

@NgModule({
    declarations: [NotFoundComponent],
    imports: [RouterModule.forRoot(
        AppRoutes,
        { enableTracing: true }
    )],
    exports: [RouterModule]
})
export class AppRoutingModule { }
