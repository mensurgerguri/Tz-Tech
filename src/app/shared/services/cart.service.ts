import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cart } from '../models/Cart.model';
import { WishListComponent } from '../../wish-list/wish-list.component';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';



@Injectable()
export class CartService {

  cart: Cart[] = [];
  constructor(private http: HttpClient) {
  }

  public getItems(): Observable<any> {
    return this.http.get(`http://localhost:8080/cart/getItems`);
  }

  public cancelItem(): Observable<any>{
      return this.http.get(`http://localhost:8080/cart/cancelItem`);
  }



}
