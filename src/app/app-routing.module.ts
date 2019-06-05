import { ProfileComponent } from './core/profile/profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TrackingOrderComponent } from './tracking-order/tracking-order.component';


const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'tracking-order', component: TrackingOrderComponent},
  {path: 'profile', component: ProfileComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
