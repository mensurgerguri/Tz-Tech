import { Component, OnInit } from '@angular/core';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { transition } from '@angular/animations';

@Component({
  selector: 'app-tracking-order',
  templateUrl: './tracking-order.component.html',
  styleUrls: ['./tracking-order.component.css']
})
export class TrackingOrderComponent implements OnInit {
  width =((Math.random() * 2) + 1); 
  amount = (Math.random() * 10) * 10 ;
  start = 0;
  mid = 50;
  end = 100;


  constructor() { }

  ngOnInit() {
  }

 

}
