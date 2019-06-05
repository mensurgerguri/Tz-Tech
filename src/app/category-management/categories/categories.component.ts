import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/services/category.service';
import { MatDialog } from '@angular/material';
import { AddCategoryComponent } from '../add-category/add-category.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: [] = [];
  selectedCategory: any;

  constructor(private categoryService: CategoryService, private dialog: MatDialog) {
    dialog.afterAllClosed.subscribe(() => {
      this.ngOnInit();
    }
    );
  }

  ngOnInit() {
    this.fetchCategories();
  }

  fetchCategories() {
    this.categoryService.getCategories().subscribe((categories: []) => {
      this.categories = categories;
    });
  }

  openAddCategoryDialog() {
    const dialogRef = this.dialog.open(AddCategoryComponent);
    const instance = dialogRef.componentInstance;
    instance.categories = this.categories;
  }

  deleteCategory(category: any) {
    this.categoryService.deleteCategory(category.id).subscribe(() => {
      this.fetchCategories();
    });
  }

  fetchSubcategories(category: any) {
    this.selectedCategory = category;
    this.categoryService.selectedCategory.next(this.selectedCategory);
  }

}
