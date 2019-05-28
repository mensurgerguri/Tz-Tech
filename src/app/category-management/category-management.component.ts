import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../shared/services/category.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AddCategoryComponent } from './add-category/add-category.component';

@Component({
  selector: 'app-category-management',
  templateUrl: './category-management.component.html',
  styleUrls: ['./category-management.component.css']
})
export class CategoryManagementComponent implements OnInit {

  categories: [];
  categoryFields: [];
  subCategories: [];
  subCategoryFields: [];

  constructor(private categoriesService: CategoryService, private dialog: MatDialog) {
    dialog.afterAllClosed
      .subscribe(() => {
        this.ngOnInit();
      }
      );
  }

  ngOnInit() {
    this.categoriesService.getCategories().subscribe((categories: []) => {
      this.categories = categories;
    });
  }

  getSubcategories(id: number) {
    this.categoriesService.getSubcategories(id).subscribe((subCategories: []) => {
      this.subCategories = subCategories;
      this.subCategoryFields = [];
    });
    this.getCategoryFields(id);
  }

  getSubcategoryFields(id: number) {
    this.categoriesService.getSubcategoryFields(id).subscribe((subCategoryFields: []) => {
      this.subCategoryFields = subCategoryFields;
    });
  }

  getCategoryFields(id: number) {
    this.categoriesService.getCategoryFields(id).subscribe((categoryFields: []) => {
      this.categoryFields = categoryFields;
    });
  }

  openAddCategoryDialog() {
    this.dialog.open(AddCategoryComponent);
  }

  deleteCategory(id: number) {
    // this.categoriesService.deleteCategory(id);
    console.log(id)
  }

}
