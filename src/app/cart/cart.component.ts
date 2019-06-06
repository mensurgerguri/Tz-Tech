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

  increase(item: any) {
    console.log(item);

    for (let i = 0; i < this.items.length; i++) {

        const element: any = this.items[i];
        if (element.id === item.id) {
          if(element.counter <= item.quantity || element.counter > item.quantity && item.quantity > 0) {
            element.counter += 1;
            item.quantity--;
          }
        }

      }
    }


    decrease(item: any) {

      for (let i = 0; i < this.items.length; i++) {
        const element: any = this.items[i];
        if (element.id === item.id) {
          if(element.counter > 0 && item.quantity >= 0) {
            item.quantity++;
            element.counter--;
          }
        }
      }
  }
}

