import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/services/category.service';
import { MatDialog } from '@angular/material';
import { AddCategoryFieldsComponent } from '../add-category-fields/add-category-fields.component';

@Component({
  selector: 'app-categories-fields',
  templateUrl: './categories-fields.component.html',
  styleUrls: ['./categories-fields.component.css']
})
export class CategoriesFieldsComponent implements OnInit {

  selectedCategory: any;
  categoryFields: [];

  constructor(private categoryService: CategoryService, private dialog: MatDialog) {
    dialog.afterAllClosed.subscribe(() => {
      this.ngOnInit();
    });

    this.categoryService.selectedCategory.subscribe(selectedCategory => {
      this.selectedCategory = selectedCategory;
      this.fetchCategoryFields(this.selectedCategory);
    });
  }

  ngOnInit() {
    this.fetchCategoryFields(this.selectedCategory);
  }

  fetchCategoryFields(selectedCategory: any) {
    if (this.selectedCategory !== undefined) {
      this.categoryService.getCategoryFields(selectedCategory.id).subscribe((categoryFields: []) => {
        this.categoryFields = categoryFields;
      });
    }
  }

  openAddCategoryFields() {
    const dialogRef = this.dialog.open(AddCategoryFieldsComponent);
    const instance = dialogRef.componentInstance;
    instance.selectedCategory = this.selectedCategory;
    instance.categoryFields = this.categoryFields;
  }

  deleteCategoryField(field: any) {
    this.categoryService.deleteCategoryField({ categoryID: this.selectedCategory.id, fieldID: field.field_id }).subscribe(() => {
      this.fetchCategoryFields(this.selectedCategory);
    });
  }

}
