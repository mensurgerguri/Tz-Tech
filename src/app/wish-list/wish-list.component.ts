import { BlobService } from './../shared/services/blob.service';
import { WishListService } from './../shared/services/WishList.service';
import { Wish } from '../shared/models/Wish.model';
import { UserDetails } from './../shared/models/user.model';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { Injectable, NgModule } from '@angular/core';



@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']

})
export class WishListComponent implements OnInit {
  router: any;
  // imageBlobUrl: string | ArrayBuffer;
  // tslint:disable-next-line: no-shadowed-variable
  constructor(private auth: AuthenticationService, private WishListService: WishListService, public snackBar: MatSnackBar) { }

  // details: UserDetails;
  wish: Wish[];

  key = 'name';
  reverse = false;
  // default page for wishlist
  page = 1;

  fetchData() {
    this.WishListService.getWishes(this.auth.getUserDetails().id).subscribe((res: Wish[]) => {
      this.wish = res;
    });
  }

  ngOnInit() {

    this.fetchData();
    //this.getThumbnail();

  }

  deleteWish() {
  this.WishListService.deleteWish(this.auth.getUserDetails().id).subscribe(() => {
    this.fetchData();
  });
}

addToCart(id: number) {

  const userID = this.auth.getUserDetails().id;
  const location = 1;
/////////////////////////////////

  this.WishListService.addToCart({ itemID: id, userID, location}).subscribe(
  (res) => {},
  err => {
    console.error(err);
  }
  );
}
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  openSnackBar(message: string, action: string, className: string) {
    // this.snackBar.open('Item has been added to wishlist', action, {
    this.snackBar.open(message, action, {

      duration: 2000,
      panelClass: [className]
    });

    }

  }


