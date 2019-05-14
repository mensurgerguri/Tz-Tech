import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignUpComponent } from './core/header/sign-up/sign-up.component';
import { SignInComponent } from './core/header/sign-in/sign-in.component';
import { MaterialModule } from './material/material.module';
import { SliderComponent } from './home/slider/slider.component';
import { NewProductsComponent } from './home/new-products/new-products.component';
import { FeaturedProductsComponent } from './home/featured-products/featured-products.component';
import { PokusComponent } from './home/pokus/pokus.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SignUpComponent,
    SignInComponent,
    SliderComponent,
    NewProductsComponent,
    FeaturedProductsComponent,
    PokusComponent
  ],
  entryComponents: [
    SignUpComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
