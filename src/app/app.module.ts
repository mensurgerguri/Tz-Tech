import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './shared/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './core/profile/profile.component';
=======
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignUpComponent } from './core/header/sign-up/sign-up.component';
import { SignInComponent } from './core/header/sign-in/sign-in.component';
import { MaterialModule } from './material/material.module';

>>>>>>> 0c5a906f550b0644ecf62186c555795ef194cacf

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProfileComponent,
<<<<<<< HEAD

=======
    SignUpComponent,
    SignInComponent
  ],
  entryComponents: [
    SignUpComponent,
    SignInComponent
>>>>>>> 0c5a906f550b0644ecf62186c555795ef194cacf
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    FormsModule,

=======
    BrowserAnimationsModule,
    MaterialModule
>>>>>>> 0c5a906f550b0644ecf62186c555795ef194cacf
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

