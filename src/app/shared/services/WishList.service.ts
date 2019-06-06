import { WishListComponent } from './../../wish-list/wish-list.component';
import { UserData } from './../../core/dummy-component/dummy-component.component';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { UserDetails } from './../models/user.model';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Wish } from '../models/Wish.model';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable()
export class WishListService {

  wish: Wish[] = [];
  constructor(private http: HttpClient, private auth: AuthenticationService) {
  }

  public AddWish(wish: Wish): Observable<any> {
    return this.http.post(`http://localhost:8080/wish/addwish`, wish);
  }

  public getWishes(id): Observable<Wish[]> {
    return this.http.get<Wish[]>(`http://localhost:8080/wish/getWishes/` + id);
  }

public deleteWish(id): Observable<Wish[]> {
  return this.http.get<Wish[]>(`http://localhost:8080/wish/deleteWish/` + id);

}
public addToCart(cartItemObj: any): Observable<any> {
  return this.http.post(`http://localhost:8080/items/addToCart`, { cartItemObj });
}
}

