import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { AdminRoutingModule } from "../admin-routing.module";
import { AdminLayoutComponent } from "./admin-layout.component";

@NgModule({
  imports: [CommonModule, AdminRoutingModule],
  declarations: [AdminLayoutComponent],
  exports: [AdminLayoutComponent],
  providers: []
})
export class AdminLayoutModule {}
