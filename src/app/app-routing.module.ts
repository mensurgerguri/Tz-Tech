import { ProfileComponent } from './core/profile/profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoryManagementComponent } from './category-management/category-management.component';
import { TrackingOrderComponent } from './tracking-order/tracking-order.component';
import { CartComponent } from './cart/cart.component';
import { ProductOverviewComponent } from './core/product-overview/product-overview.component';
import { ContactComponent } from './contact/contact.component';
import { WishListComponent } from './wish-list/wish-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'categories', component: CategoryManagementComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'cart', component: CartComponent },
  //{ path: '**', redirectTo: '', pathMatch: 'full' },
  {path: 'tracking-order', component: TrackingOrderComponent},
  { path: 'product-overview', component: ProductOverviewComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'wishlist', component: WishListComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
