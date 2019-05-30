
import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/shared/services/items.service';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.css']
})

export class ProductOverviewComponent implements OnInit {
  counter = 1;
  total = 0;
  items: [];
  name: string;
  brand: string;
  category: string;
  price: number;
  perPage: number;

  max = this.items;
  constructor(private itemsService: ItemsService, private auth: AuthenticationService, public snackBar: MatSnackBar) { }

  ngOnInit() {
this.itemsService.getItems().subscribe(res => {
  this.items = res;
});
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

  increment(id: number){
    const itemID = this.itemsService.getItems();
  }

    increase():void {
      this.counter += 1;
    }

    decrease(item_quantity) {
      this.counter -= 1;
    }

  openSnackBar(message: string, action: string, className: string) {
    // this.snackBar.open('Item has been added to wishlist', action, {
     this.snackBar.open(message, action, {

      duration: 2000,
      panelClass: [className]
    });

}

key: string = 'name';
reverse: boolean = false;

sort(key) {
  this.key = key;
  this.reverse = !this.reverse;
}

p: number = 1;
}


