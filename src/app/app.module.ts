import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './core/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './core/profile/profile.component';
import { MaterialModule } from './material/material.module';
import { AuthenticationService } from './shared/services/authentication.service';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogRef } from '@angular/material';
import { TermsComponent } from './core/header/sign-up/terms/terms.component';
import { SliderComponent } from './home/slider/slider.component';
import { NewProductsComponent } from './home/new-products/new-products.component';
import { FeaturedProductsComponent } from './home/featured-products/featured-products.component';
import { PokusComponent } from './home/pokus/pokus.component';
import { SignInComponent } from './core/header/sign-in/sign-in.component';
import { SignUpComponent } from './core/header/sign-up/sign-up.component';
import { TableComponent } from './table/table.component';
import { MatTableModule, MatSortModule, MatSelectModule, MatMenuModule, MatIconModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
// import { ItemProfileComponent } from './core/item-profile/item-profile.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProfileComponent,
    SignInComponent,
    SignUpComponent,
    SignInComponent,
    TermsComponent,
    SliderComponent,
    NewProductsComponent,
    FeaturedProductsComponent,
    PokusComponent,
    TableComponent,
    // ItemProfileComponent,
  

  ],
  entryComponents: [
    SignUpComponent,
    SignInComponent,
    TermsComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatSelectModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  // exports: [
  //   AppModule,
  //   HeaderComponent,
  //   FooterComponent,
  // ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
