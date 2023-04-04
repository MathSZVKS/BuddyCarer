import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SideBarComponent } from "./side-bar/side-bar.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AngularMaterialModule } from "./angular-material/angular-material.module";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ContentComponent } from "./content/content.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { SearchComponent } from "./search/search.component";
import { LoginComponent } from "./login/login.component";
import { ToastrModule } from "ngx-toastr";
import { FullCalendarModule } from "@fullcalendar/angular";
import { ProgressBarModule } from "angular-progress-bar";

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    ContentComponent,
    TopBarComponent,
    SearchComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    ProgressBarModule,
    FullCalendarModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FontAwesomeModule,
    ToastrModule.forRoot({
      preventDuplicates: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
