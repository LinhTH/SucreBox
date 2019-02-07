import { LoginInfoOverviewPageComponent } from './login-info-overview-page/login-info-overview-page.component';
import { NgModule } from '@angular/core';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [LoginInfoOverviewPageComponent],
  imports: [ComponentsModule],
  exports: [LoginInfoOverviewPageComponent]
})
export class ContainersModule {}
