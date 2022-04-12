import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomeComponent } from './core/home/home.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ProductsComponent } from './views/products/products.component';
import { HimProductsComponent } from './views/him-products/him-products.component';
import { HerProductsComponent } from './views/her-products/her-products.component';
import { SingleProductComponent } from './views/single-product/single-product.component';
import { CartComponent } from './core/cart/cart.component';
import { CheckoutComponent } from './core/checkout/checkout.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { LogoutComponent } from './user/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    HimProductsComponent,
    HerProductsComponent,
    SingleProductComponent,
    CartComponent,
    CheckoutComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
