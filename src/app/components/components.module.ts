import { NgModule } from '@angular/core';
import { ListBasicComponent } from './list-basic/list-basic.component';
import { MaterialFrameWorkModule } from '../core/modules/material-framework.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

const COMPONENTS = [ListBasicComponent];

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, BrowserModule, MaterialFrameWorkModule],
  exports: [COMPONENTS]
})
export class ComponentsModule {}
