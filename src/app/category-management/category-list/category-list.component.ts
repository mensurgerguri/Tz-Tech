import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: string[];

  constructor(private categoriesService: CategoryService) { }

  ngOnInit() {
    this.categoriesService.getCategories().subscribe((categories: string[]) => {console.log("here I am")
      this.categories = categories;
    });

  }
}
