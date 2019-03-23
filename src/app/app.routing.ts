import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@Component({
    template: `NOT FOUND`
})
export class NotFoundComponent { }

const AppRoutes: Routes = [
  { path: '', redirectTo: '/password-overview', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
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
