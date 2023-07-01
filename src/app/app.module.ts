import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SideBarComponent } from "./components/side-bar/side-bar.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AngularMaterialModule } from "./externalComponents/angular-material/angular-material.module";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ContentComponent } from "./components/content/content.component";
import { TopBarComponent } from "./components/top-bar/top-bar.component";
import { SearchComponent } from "./components/search/search.component";
import { LoginComponent } from "./components/login/login.component";
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
import { RadarChartComponent } from './externalComponents/radar-chart/radar-chart.component';
import { PieChartComponent } from './externalComponents/pie-chart/pie-chart.component';
import { PolarAreaChartComponent } from './externalComponents/polar-area-chart/polar-area-chart.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    ContentComponent,
    TopBarComponent,
    SearchComponent,
    LoginComponent,
    BarChartComponent,
    RadarChartComponent,
    PieChartComponent,
    PolarAreaChartComponent,
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
    }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
