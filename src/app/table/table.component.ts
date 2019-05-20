import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

export interface PeriodicElement {

  position: number;
  brand: string;
  model: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, brand: 'EVGA', model: 'GTX 770' },
  { position: 2, brand: 'ZOTAC', model: 'GTX 780' },
  { position: 3, brand: 'NVIDIA', model: 'GTX 660 TI' },
  { position: 4, brand: 'INTEL', model: 'i5' },
  { position: 5, brand: 'AMD', model: 'Ryzen' },
  { position: 6, brand: 'FORTRON', model: 'PSU 650W' },
  { position: 7, brand: 'KINGSTON', model: '8GB DDR3' },
  { position: 8, brand: 'COOLERMASTER', model: 'H110' },
  { position: 9, brand: 'SKILL.G', model: '4GB DDR4' },
  { position: 10, brand: 'MSINDUSTRIAL', model: 'MX7R' },
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['position', 'brand', 'model'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() { }

  ngOnInit() {
  }

}

