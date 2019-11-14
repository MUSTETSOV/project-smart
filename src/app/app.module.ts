
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


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroComponent,
    Header2Component,
    AboutusComponent,
    DeviceCategoriesComponent,
    MakeSimpleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
