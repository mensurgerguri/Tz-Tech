
import { PurchaseService } from './shared/services/Purchase.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DummyComponentComponent } from './core/dummy-component/dummy-component.component';
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
import { MatTableModule, MatSortModule, MatSelectModule, MatMenuModule, MatIconModule} from '@angular/material';
import {MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { ForgotPassComponent } from './core/header/sign-in/forgot-pass/forgot-pass.component';
import { ProductOverviewComponent } from './core/product-overview/product-overview.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { WishListService } from './shared/services/WishList.service';
import { Ng2OrderModule} from 'ng2-order-pipe';
import { NgxPaginationModule} from 'ngx-pagination';
import { Ng2SmartTableModule} from 'ng2-smart-table';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import {HistoryTableComponent} from './history-table/history-table.component';
import { from } from 'rxjs';
import { TrackingOrderComponent } from './tracking-order/tracking-order.component';
import { TableService } from './table/table.service';
import { TrackOrderComponent } from './track-order/track-order.component';




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
    ForgotPassComponent,
    ProductOverviewComponent,
    DummyComponentComponent,
    WishListComponent,
    ProfileCardComponent,
    HistoryTableComponent,
    ProfileCardComponent,
    TrackingOrderComponent,
    TrackOrderComponent,


  ],
  entryComponents: [
    SignUpComponent,
    SignInComponent,
    TermsComponent,
    ForgotPassComponent
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
    MatInputModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    Ng2SmartTableModule,
    HttpClientModule
  ],
  // exports: [
  //   AppModule,
  //   HeaderComponent,
  //   FooterComponent,
  // ],

  providers: [AuthenticationService, TableService, WishListService, PurchaseService],


  bootstrap: [AppComponent]
})
export class AppModule { }
