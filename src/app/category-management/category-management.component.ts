import { Component, OnInit, OnChanges } from '@angular/core';
import { CategoryService } from '../shared/services/category.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddSubcategoryComponent } from './add-subcategory/add-subcategory.component';
import { AddCategoryFieldsComponent } from './add-category-fields/add-category-fields.component';
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
  subcategoryFields: [];
  selectedCategory: any;
  selectedSubcategory: any;

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
    if (this.categoryFields) {
      this.getCategoryFields(this.selectedCategory.id);
    }
    if (this.subcategoryFields) {
      this.getSubcategoryFields(this.selectedSubcategory);
    }
  }

  getSubcategories(category: any) {
    this.categoryService.getSubcategories(category.id).subscribe((subCategories: []) => {
      this.subCategories = subCategories;
    });
    this.selectedCategory = category;
    this.getCategoryFields(category.id);
  }

  getSubcategoryFields(subCategory: any) {
    this.categoryService.getSubcategoryFields(subCategory.subcat_id).subscribe((subCategoryFields: []) => {
      this.subcategoryFields = subCategoryFields;
    });
    this.selectedSubcategory = subCategory.valueOf();
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
    this.categoryService.deleteCategory(id).subscribe(() => {
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
    this.categoryService.deleteSubcategory(id).subscribe(() => {
      this.fetchSubcategories();
    });
  }

  openAddCategoryFields() {
    const dialogRef = this.dialog.open(AddCategoryFieldsComponent);
    const instance = dialogRef.componentInstance;
    instance.selectedCategory = this.selectedCategory;
    instance.categoryFields = this.categoryFields;
  }

  deleteCategoryField(field: any) {
    this.categoryService.deleteCategoryField({ categoryID: this.selectedCategory.id, fieldID: field.field_id }).subscribe(() => {
      this.getCategoryFields(this.selectedCategory.id);
    });
  }

  deleteSubcategoryField(subcategoryField: any) {
    this.categoryService.deleteSubcategoryField({ identifier: 2, subcategoryID: this.selectedSubcategory.subcat_id, fieldID: subcategoryField.field_id }).subscribe(() => {
      this.getSubcategoryFields(this.selectedSubcategory);
    });
  }

  openAddSubcategoryFields() {
    const dialogRef = this.dialog.open(AddSubcategoryFieldsComponent);
    const instance = dialogRef.componentInstance;
    instance.selectedSubcategory = this.selectedSubcategory;
    instance.subcategoryFields = this.subcategoryFields;
  }

}
