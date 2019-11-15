
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './shared/header/header.component';
import { IntroComponent } from './intro/intro.component';
import { Header2Component } from './header2/header2.component';
import { AboutusComponent } from './main/aboutus/aboutus.component';
import { DeviceCategoriesComponent } from './device-categories/device-categories.component';
import { MakeSimpleComponent } from './main/make-simple/make-simple.component';
import { OurServicesComponent } from './main/our-services/our-services.component';
import { BrandsComponent } from './main/brands/brands.component';
import { ReviewsComponent } from './main/reviews/reviews.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './shared/footer/footer.component';



import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroComponent,
    Header2Component,
    AboutusComponent,
    DeviceCategoriesComponent,
    MakeSimpleComponent,
    OurServicesComponent,
    BrandsComponent,
    ReviewsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'smartfix-app' }),
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ?
    'on the server' : 'in the browser';
    console.log('Running ${platform} with appId=${appId}');
    }


 }
