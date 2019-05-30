import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../shared/services/category.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddSubcategoryComponent } from './add-subcategory/add-subcategory.component';
import { AddSubcategoryFieldsComponent } from './add-subcategory-fields/add-subcategory-fields.component';

@Component({
  selector: 'app-category-management',
  templateUrl: './category-management.component.html',
  styleUrls: ['./category-management.component.css']
})
export class CategoryManagementComponent implements OnInit {

  categories: [] = [];
  categoryFields: [];
  subCategories: [];
  subCategoryFields: [];
  selectedCategory: any;

  constructor(private categoryService: CategoryService, private dialog: MatDialog) {
    dialog.afterAllClosed
      .subscribe(() => {
        this.ngOnInit();
      }
      );
  }

  ngOnInit() {
    this.fetchCategories();
    this.fetchSubcategories();
    if(this.categoryFields) {
      this.getCategoryFields(this.selectedCategory.id);
    }
  }

  getSubcategories(category: any) {
    this.categoryService.getSubcategories(category.id).subscribe((subCategories: []) => {
      this.subCategories = subCategories;
      this.subCategoryFields = [];
    });
    this.selectedCategory = category;
    this.getCategoryFields(category.id);
  }

  getSubcategoryFields(id: number) {
    this.categoryService.getSubcategoryFields(id).subscribe((subCategoryFields: []) => {
      this.subCategoryFields = subCategoryFields;
    });
  }

  getCategoryFields(id: number) {
    this.categoryService.getCategoryFields(id).subscribe((categoryFields: []) => {
      this.categoryFields = categoryFields;
    });
  }

  openAddCategoryDialog() {
    this.dialog.open(AddCategoryComponent);
  }

  openAddSubcategoryDialog() {
    const dialogRef = this.dialog.open(AddSubcategoryComponent);
    const instance = dialogRef.componentInstance;
    instance.selectedCategory = this.selectedCategory;
  }

  deleteCategory(id: number) {
    this.categoryService.deleteCategory(id).subscribe((res) => {
      this.fetchCategories();
    });
  }

  fetchCategories() {
    this.categoryService.getCategories().subscribe((categories: []) => {
      this.categories = categories;
    });
  }

  fetchSubcategories() {
    if (this.selectedCategory) {
      this.categoryService.getSubcategories(this.selectedCategory.id).subscribe((subCategories: []) => {
        this.subCategories = subCategories;
      });
    }
  }

  deleteSubcategory(id: number) {
    this.categoryService.deleteSubcategory(id).subscribe((res) => {
      this.fetchSubcategories();
    });
  }

  // fetchCategoryFields() {
  //   this.categoryService.getCategoryFields(this.selectedCategory.id).subscribe((categoryFields: []) => {
  //     this.categoryFields = categoryFields;
  //   });
  // }

  openAddCategoryFields() {
    const dialogRef = this.dialog.open(AddSubcategoryFieldsComponent);
    const instance = dialogRef.componentInstance;
    instance.selectedCategory = this.selectedCategory;
    instance.categoryFields = this.categoryFields;
  }

}
