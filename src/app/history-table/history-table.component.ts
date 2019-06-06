import { PurchaseService } from './../shared/services/Purchase.service';
import { WishListService } from './../shared/services/WishList.service';
import { Wish } from '../shared/models/Wish.model';
import { UserDetails } from './../shared/models/user.model';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { Order } from '../shared/models/order.model';


@Component({
  selector: 'app-history-table',
  templateUrl: './history-table.component.html',
  styleUrls: ['./history-table.component.css']
})

export class HistoryTableComponent {

  // tslint:disable-next-line: no-shadowed-variable
  constructor(private auth: AuthenticationService, private PurchaseService: PurchaseService, public snackBar: MatSnackBar) { }

  // details: UserDetails;
  order: Order[];
  p = 1;

  ngOnInit() {

    this.PurchaseService.getOrders(this.auth.getUserDetails().id).subscribe((res: Order[]) => {
      this.order = res;
    }
    );
  }

  openSnackBar(message: string, action: string, className: string) {
    // this.snackBar.open('Item has been added to wishlist', action, {
    this.snackBar.open(message, action, {

      duration: 2000,
      panelClass: [className]
    });
  }

}
