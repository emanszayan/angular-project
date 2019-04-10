import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './app/login/login.component';
import { HomeComponent } from './app/home/home.component';
import { CartComponent } from './header/cart/cart.component';
import { ProductComponent } from './app/product/product.component';
import { WishlistComponent } from './header/wishlist/wishlist.component';
import { UsernameComponent } from './header/username/username.component';
import { NavigationComponent } from './header/navigation/navigation.component';
import { NotfoundComponent } from './app/notfound/notfound.component';

const routes: Routes = [
  { path: '', component: LoginComponent },

  { path: 'register', component: RegisterComponent},

  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'wishlist', component: WishlistComponent},
  { path: 'logout', component: UsernameComponent},
  { path: 'cart/:id', component: ProductComponent},
  { path: 'navigate', component: NavigationComponent},
  { path: '**', component:  NotfoundComponent},

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
