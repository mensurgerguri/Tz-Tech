
import { WishListService } from './../shared/services/WishList.service';
import { Wish } from '../shared/models/Wish.model';
import { UserDetails } from './../shared/models/user.model';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';


@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {

  // tslint:disable-next-line: no-shadowed-variable
  constructor(private auth: AuthenticationService, private WishListService: WishListService, public snackBar: MatSnackBar) { }
  credentials: Wish = {

    id: 1

  };
  details: UserDetails;
  wish: Wish;

  img: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  perPage: number;
  items = [
    {
      "id": "1",
      "img": 'https://static.toiimg.com/photo/64171591/Samsung-Galaxy-S10.jpg',
      "name": "Galaxy J3",
      "brand": "Samsung",
      "category": "Mobile",
      "price": 250.00
    },
    {
      "id": "2",
      "img": 'https://laptoping.com/specs/wp-content/uploads/2015/01/Lenovo-ThinkPad-T480s-20L70028US-20L7002BUS.jpg',
      "name": "X700",
      "brand": "ASUS",
      "category": "Laptop",
      "price": 200.00
    },
    {
      "id": "3",
      "img": 'https://laptoping.com/specs/wp-content/uploads/2015/01/Lenovo-ThinkPad-T480s-20L70028US-20L7002BUS.jpg',
      "name": "Notebook",
      "brand": "HP",
      "category": "Laptop",
      "price": 300.00
    },
    {
      "id": "4",
      "img": 'https://laptoping.com/specs/wp-content/uploads/2015/01/Lenovo-ThinkPad-T480s-20L70028US-20L7002BUS.jpg',
      "name": "9s",
      "brand": "Apple",
      "category": "Mobile",
      "price": 375.00
    },
    {
      "id": "5",
      "img": 'https://laptoping.com/specs/wp-content/uploads/2015/01/Lenovo-ThinkPad-T480s-20L70028US-20L7002BUS.jpg',
      "name": "A35",
      "brand": "Tesla",
      "category": "TV",
      "price": 1000.00
    },
    {
      "id": "6",
      "img": 'https://laptoping.com/specs/wp-content/uploads/2015/01/Lenovo-ThinkPad-T480s-20L70028US-20L7002BUS.jpg',
      "name": "ProBook",
      "brand": "HP",
      "category": "Laptop",
      "price": 750.00
    },
    {
      "id": "7",
      "img": 'https://laptoping.com/specs/wp-content/uploads/2015/01/Lenovo-ThinkPad-T480s-20L70028US-20L7002BUS.jpg',
      "name": "iMac",
      "brand": "Apple",
      "category": "PC",
      "price": 2200.00
    }, {
      "id": "8",
      "img": 'https://laptoping.com/specs/wp-content/uploads/2015/01/Lenovo-ThinkPad-T480s-20L70028US-20L7002BUS.jpg',
      "name": "LT2",
      "brand": "IBM",
      "category": "Laptop",
      "price": 100.00
    }, {
      "id": "9",
      "img": 'https://laptoping.com/specs/wp-content/uploads/2015/01/Lenovo-ThinkPad-T480s-20L70028US-20L7002BUS.jpg',
      "name": "G7000",
      "brand": "ROG",
      "category": "PC",
      "price": 350.00
    }, {
      "id": "10",
      "img": 'https://laptoping.com/specs/wp-content/uploads/2015/01/Lenovo-ThinkPad-T480s-20L70028US-20L7002BUS.jpg',
      "name": "T210",
      "brand": "Lenovo",
      "category": "Laptop",
      "price": 1000.00
    }
  ];
  //sorting
  key: string = 'name';
  reverse: boolean = false;

  p: number = 1;

  ngOnInit() {
    this.details = this.auth.getUserDetails();
    this.credentials.id = this.details.id;
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
