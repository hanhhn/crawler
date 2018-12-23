import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchComponent } from './search.component';

const routes: Routes = [
  {
    path: "",
    component: SearchComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [SearchComponent],
  exports: [SearchComponent],
  providers: []
})
export class PageSearchModule {}
