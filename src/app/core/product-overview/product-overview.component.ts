
import { Component } from '@angular/core';
import {PageEvent} from '@angular/material';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.css']
})

export class ProductOverviewComponent {
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

  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  p: number = 1;


}
