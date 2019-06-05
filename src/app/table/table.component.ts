import { Component, OnInit } from '@angular/core';
import { TableService } from '../shared/services/Table.service';
import { Table} from '../shared/models/table.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})


export class TableComponent implements OnInit {
 
characters: Table[];

  constructor(private tservice: TableService) { }
  
  ngOnInit() {
    
    this.tservice.getCharacters().subscribe((data:Table[])=>{
      this.characters = data;
    })
  }
  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      product: {
        title: 'Product'
      },
    price: {
        title: 'Price'
      }
    }
  };
}

