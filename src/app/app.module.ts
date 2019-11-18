
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './shared/header/header.component';
import { IntroComponent } from './intro/intro.component';
import { AboutusComponent } from './main/aboutus/aboutus.component';
import { DeviceCategoriesComponent } from './device-categories/device-categories.component';
import { MakeSimpleComponent } from './main/make-simple/make-simple.component';
import { OurServicesComponent } from './main/our-services/our-services.component';
import { BrandsComponent } from './main/brands/brands.component';
import { ReviewsComponent } from './main/reviews/reviews.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './shared/footer/footer.component';

import { RouterModule } from '@angular/router';


import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DevicesComponent } from './devices/devices.component';
import { HttpClientModule } from '@angular/common/http';
import { BrandsService } from './services/brands.service';
import { BuyPartsComponent } from './buy-parts/buy-parts.component';
import { ModelCardComponent } from './buy-parts/model-card/model-card.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroComponent,
    AboutusComponent,
    DeviceCategoriesComponent,
    MakeSimpleComponent,
    OurServicesComponent,
    BrandsComponent,
    ReviewsComponent,
    FooterComponent,
    HomeComponent,
    DevicesComponent,
    BuyPartsComponent,
    ModelCardComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'smartfix-app' }),
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    NgbModule,
    RouterModule.forRoot([
       { path: '', component: HomeComponent },
       { path: 'devices', component: DevicesComponent },
       { path: 'buy-parts', component: BuyPartsComponent }



      // { path: 'shopping-cart', component: ShoppingCartComponent },
      // { path: 'check-out', component: CheckOutComponent },
      // { path: 'order-success', component: OrderSuccessComponent },
      // { path: 'my/orders', component: MyOrdersComponent },
      // { path: 'login', component: LoginComponent },
      // { path: 'admin/products', component: AdminProductsComponent },
      // { path: 'admin/orders', component: AdminOrdersComponent }
    ]),
    HttpClientModule
  ],
  providers: [BrandsService],
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
