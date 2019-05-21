// import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
// import { MatTableDataSource } from '@angular/material';
// import { MdbTableDirective } from 'angular-bootstrap-md';

// // export interface PeriodicElement {
// //   name: string;
// //   position: number;
// //   weight: number;
// //   symbol: string;
// // }

// // const ELEMENT_DATA: PeriodicElement[] = [
// //   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
// //   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
// //   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
// //   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
// //   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
// //   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
// //   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
// //   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
// //   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
// //   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// // ];
// @Component({
//   selector: 'app-item-profile',
//   templateUrl: './item-profile.component.html',
//   styleUrls: ['./item-profile.component.css']
// })

// export class ItemProfileComponent implements OnInit {
//   @ViewChild(MdbTableDirective) mdbTable: MdbTableDirective;
//   elements: any = [];
//   headElements = ['ID', 'First', 'Last', 'Handle'];

//   searchText: string = '';
//   previous: string;

//   constructor() { }

//   @HostListener('input') oninput() {
//     this.searchItems();
//   }

//   ngOnInit() {
//     for (let i = 1; i <= 10; i++) {
//       this.elements.push({ id: i.toString(), first: 'Wpis ' + i, last: 'Last ' + i, handle: 'Handle ' + i });
//     }

//     this.mdbTable.setDataSource(this.elements);
//     this.elements = this.mdbTable.getDataSource();
//     this.previous = this.mdbTable.getDataSource();
//   }

//   searchItems() {
//     const prev = this.mdbTable.getDataSource();

//     if (!this.searchText) {
//       this.mdbTable.setDataSource(this.previous);
//       this.elements = this.mdbTable.getDataSource();
//     }

//     if (this.searchText) {
//       this.elements = this.mdbTable.searchLocalDataBy(this.searchText);
//       this.mdbTable.setDataSource(prev);
//     }
//   }
// }