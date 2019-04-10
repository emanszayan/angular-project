import { BrowserModule }                 from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './app/login/login.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './app/footer/footer.component';
import { HeaderComponent } from './app/header/header.component';
import { CartComponent } from './header/cart/cart.component';
import { WishlistComponent } from './header/wishlist/wishlist.component';
import { NavigationComponent } from './header/navigation/navigation.component';
import { UsernameComponent } from './header/username/username.component';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { HomeComponent } from './app/home/home.component';
import { ProductComponent } from './app/product/product.component';
import { SingleComponent } from './app/product/single/single.component';
import { NotfoundComponent } from './app/notfound/notfound.component';

@NgModule({ 
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    CartComponent,
    WishlistComponent,
    NavigationComponent,
    UsernameComponent,
    HomeComponent,
    ProductComponent,
    SingleComponent,
    NotfoundComponent
  ],
  imports: [
    StorageServiceModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [StorageServiceModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
