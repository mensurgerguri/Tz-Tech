
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Wish } from '../models/Wish.model';
import { WishListComponent } from '../../wish-list/wish-list.component';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';



@Injectable()
export class WishListService {

  wish: Wish[] = [];
  constructor(private http: HttpClient) {
  }

  public AddWish(wish: Wish): Observable<any> {
    return this.http.post(`http://localhost:8080/wish/addwish`, wish);
  }
}
