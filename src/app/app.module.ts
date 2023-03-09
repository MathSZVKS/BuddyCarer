import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ContentComponent } from './content/content.component';
import { TopBarComponent } from './top-bar/top-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    ContentComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
 }
