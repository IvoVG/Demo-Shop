import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CheckoutComponent } from './core/checkout/checkout.component';
import { CartComponent } from './core/cart/cart.component';
import { HomeComponent } from './core/home/home.component';
import { HerProductsComponent } from './views/her-products/her-products.component';
import { HimProductsComponent } from './views/him-products/him-products.component';
import { ProductsComponent } from './views/products/products.component';
import { SingleProductComponent } from './views/single-product/single-product.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { AuthGuard } from './core/auth.guard';

const routes: Routes = [
  { path:"", component:HomeComponent },
  { path:"products", component:ProductsComponent },
  {path: "him-products", component: HimProductsComponent},
  {path: "her-products", component:HerProductsComponent},
  {path:"single-product", component:SingleProductComponent},
  {path: "cart", component: CartComponent},
  {path:"checkout", component: CheckoutComponent},
  {path:"login",component:LoginComponent},
  {path:"register", component: RegisterComponent},
  { path: "**", redirectTo: ""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
