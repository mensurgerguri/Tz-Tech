import { ProfileComponent } from './core/profile/profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './core/header/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
<<<<<<< HEAD
<<<<<<< HEAD
  { path: 'signup', component: SignUpComponent }
=======
  { path: 'profile', component: ProfileComponent }
>>>>>>> 19e66317bf982c04b55c28f529bd025649a5b5df
=======
>>>>>>> eb670befc48991ae26a5625daeacc19dea669315
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
