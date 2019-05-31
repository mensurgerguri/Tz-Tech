import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Items } from '../models/Items.model';
import { Router } from '@angular/router';


@Injectable()
export class ItemsService {

  items: Items[] = [];
  constructor(private http: HttpClient, private router: Router) { }

  public getItems(): Observable<any> {
    return this.http.get(`http://localhost:8080/items/listItems`);
  }

//   public cancelItem(): Observable<any>{
//       return this.http.get(`http://localhost:8080/cart/cancelItem`);
//   }

public addToCart(cartItemObj: any): Observable<any> {
    return this.http.post(`http://localhost:8080/items/addToCart`, { cartItemObj });
  }


}
