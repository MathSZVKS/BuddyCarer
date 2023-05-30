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
import { StarRatingModule } from 'angular-star-rating';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { UploaderModule } from "angular-uploader";
import { ColorPickerModule } from 'ngx-color-picker';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgChartsModule, NgChartsConfiguration } from 'ng2-charts';
import { BarChartComponent } from './externalComponents/bar-chart/bar-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    ContentComponent,
    TopBarComponent,
    SearchComponent,
    LoginComponent,
    BarChartComponent,
  ],
  imports: [
    BrowserModule,
    ProgressBarModule,
    NgSelectModule,
    NgChartsModule,
    StarRatingModule.forRoot(),
    FullCalendarModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UploaderModule,
    AngularMaterialModule,
    ColorPickerModule,
    FontAwesomeModule,
    ToastrModule.forRoot({
      preventDuplicates: true,
    }),
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
