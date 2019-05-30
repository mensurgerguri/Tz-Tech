import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/services/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  counterValue = 1;

items: [];

  constructor(private cartService: CartService) { }

  ngOnInit() {
this.cartService.getItems().subscribe(res=>{
  this.items = res;
});
  }

  cancelItem() {
   
      this.cartService.cancelItem()
      .subscribe(res => {
       this.items = res;
      });
  }

  // cancelOrder(){
  //   this.cartService.getItems().;
  // }

  get counter() {
    return this.counterValue;
  }

  set counter(value) {
    this.counterValue = value;
  }

  decrement() {
    this.counter--;
  }

  increment() {
    this.counter++;
  }
}

