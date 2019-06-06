
import { Component, OnInit, Input } from '@angular/core';
import { ItemsService } from 'src/app/shared/services/items.service';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { MatSnackBar } from '@angular/material';
import { Items } from 'src/app/shared/models/Items.model';


@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.css']
})

export class ProductOverviewComponent implements OnInit {

  constructor(private itemsService: ItemsService, private auth: AuthenticationService, public snackBar: MatSnackBar) { }
  // counter = 0;
  total = 0;
  items: [];
  name: string;
  brand: string;
  category: string;
   price: number;
   perPage: number;
   key = 'name';
   reverse = false;
  p = 1;

  ngOnInit() {
this.itemsService.getItems().subscribe((res => {
  this.items = res;

  console.log(res);


}));
  }

  addToCart(id: number) {

    const userID = this.auth.getUserDetails().id;
    const location = 1;
  /////////////////////////////////

    this.itemsService.addToCart({ itemID: id, userID, location}).subscribe(
    (res) => {},
    err => {
      console.error(err);
    }
    );
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

  openSnackBar(message: string, action: string, className: string) {
    // this.snackBar.open('Item has been added to wishlist', action, {
     this.snackBar.open(message, action, {

      duration: 2000,
      panelClass: [className]
    });

}

sort(key) {
  this.key = key;
  this.reverse = !this.reverse;
}
}


