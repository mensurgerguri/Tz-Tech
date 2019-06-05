
import { Wish } from 'src/app/shared/models/Wish.model';
import { UserData } from './../../core/dummy-component/dummy-component.component';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { UserDetails } from './../models/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Order } from '../models/order.model';
import { getOrCreateNodeInjectorForNode } from '@angular/core/src/render3/di';

@Injectable()
export class PurchaseService {

  order: Order;

  constructor(private http: HttpClient, private auth: AuthenticationService) {
  }

  public getOrders(id: number): Observable<Order[]> {
    return this.http.get<Order[]>(`http://localhost:8080/order/getOrders/` + id);
  }

public getOrder(id: number): Observable<Order> {
return this.http.get<Order>(`http://localhost:8080/order/getOrder/` + id);

}
}



