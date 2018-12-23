import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AdminLayoutComponent } from "./layout/admin-layout.component";

const routes: Routes = [
  {
    path: "admin",
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: "./pages/dashboard/dashboard.module#PageDashboardModule"
      },
      {
        path: "dashboard",
        loadChildren: "./pages/dashboard/dashboard.module#PageDashboardModule"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
