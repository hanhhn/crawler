import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AdminLayoutModule } from "./admin/layout/admin-layout.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeLayoutModule } from "./home/layout/home-layout.module";

@NgModule({
  imports: [
    BrowserModule,
    HomeLayoutModule,
    AdminLayoutModule,
    AppRoutingModule
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
