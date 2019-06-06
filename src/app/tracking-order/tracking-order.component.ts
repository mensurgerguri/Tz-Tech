
import { HttpClient } from '@angular/common/http';
import { PurchaseService } from './../shared/services/Purchase.service';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { transition } from '@angular/animations';
import { Order } from '../shared/models/order.model';
import {UserDetails} from './../shared/models/user.model';




@Component({
  selector: 'app-tracking-order',
  templateUrl: './tracking-order.component.html',
  styleUrls: ['./tracking-order.component.css']
})
export class TrackingOrderComponent implements OnInit {

  // width = ((Math.random() * 2) + 1);
  // amount = (Math.random() * 10) * 10;
  // start = 0;
  // mid = 50;
  // end = 100;
  UserDetails: any;
  order: any;

  // tslint:disable-next-line: no-shadowed-variable
  constructor(private purchaseservice: PurchaseService, private auth: AuthenticationService, private HttpClient: HttpClient) { }

  ngOnInit() {
    this.purchaseservice.getOrder(this.auth.getUserDetails().id).subscribe((res: any) => {

      if (res !== undefined) {
        this.order = res[0].Status_code;
      }
      
      //this.order = this.UserDetails;

      
    });
  }
}


