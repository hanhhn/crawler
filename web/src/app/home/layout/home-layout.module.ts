import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeRoutingModule } from '../home-routing.module';
import { HomeLayoutComponent } from './home-layout.component';

@NgModule({
  imports: [CommonModule, HomeRoutingModule],
  declarations: [HomeLayoutComponent],
  exports: [HomeLayoutComponent],
  providers: []
})
export class HomeLayoutModule {}
