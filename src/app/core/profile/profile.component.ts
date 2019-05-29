
import { PurchaseService } from './../../shared/services/Purchase.service';
import { WishListService } from './../../shared/services/WishList.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatSnackBar } from '@angular/material';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { Wish } from 'src/app/shared/models/Wish.model';
import { Order } from 'src/app/shared/models/order.model';
import { WishListComponent } from './../../wish-list/wish-list.component';
import { HistoryTableComponent } from 'src/app/history-table/history-table.component';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {


  // tslint:disable-next-line: no-shadowed-variable
  // constructor(private http: HttpClient, private WishListService: WishListService) { }
  // tslint:disable-next-line: no-shadowed-variable
  constructor(private auth: AuthenticationService, private WishListService: WishListService, private PurchaseService: PurchaseService, public snackBar: MatSnackBar) { }

  // wish: Wish[];
  // order: Order[];


  ngOnInit() { }

}
