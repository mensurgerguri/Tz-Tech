import { Component, OnInit } from '@angular/core';
import { CategoriesFieldsComponent } from '../categories-fields/categories-fields.component';
import { CategoryService } from 'src/app/shared/services/category.service';
import { MatDialog } from '@angular/material';
import { AddSubcategoryFieldsComponent } from '../add-subcategory-fields/add-subcategory-fields.component';

@Component({
  selector: 'app-subcategories-fields',
  templateUrl: './subcategories-fields.component.html',
  styleUrls: ['./subcategories-fields.component.css']
})
export class SubcategoriesFieldsComponent implements OnInit {

  selectedSubcategory: any;
  subcategoryFields: [];

  constructor(private categoryService: CategoryService, private dialog: MatDialog) {
    this.categoryService.selectedSubcategory.subscribe(selectedSubcategory => {
      this.selectedSubcategory = selectedSubcategory;
      this.fetchSubcategories(this.selectedSubcategory);
    });

    dialog.afterAllClosed.subscribe(() => {
      this.ngOnInit();
    });
  }

  ngOnInit() {
    this.fetchSubcategoryFields(this.selectedSubcategory);
  }

  fetchSubcategories(selectedSubcategory: any) {
    if (this.selectedSubcategory !== undefined) {
      this.categoryService.getSubcategoryFields(selectedSubcategory.subcat_id).subscribe((subCategoryFields: []) => {
        this.subcategoryFields = subCategoryFields;
      });
    }
  }

  openAddSubcategoryFieldsDialog() {
    const dialogRef = this.dialog.open(AddSubcategoryFieldsComponent);
    const instance = dialogRef.componentInstance;
    instance.selectedSubcategory = this.selectedSubcategory;
    instance.subcategoryFields = this.subcategoryFields;
  }

  fetchSubcategoryFields(selectedSubcategory: any) {
    if (this.selectedSubcategory !== undefined) {
      this.categoryService.getSubcategoryFields(selectedSubcategory.subcat_id).subscribe((subCategoryFields: []) => {
        this.subcategoryFields = subCategoryFields;
      });
    }
  }

  deleteSubcategoryField(subcategoryField: any) {
    this.categoryService.deleteSubcategoryField({ identifier: 2, subcategoryID: this.selectedSubcategory.subcat_id, fieldID: subcategoryField.field_id }).subscribe(() => {
      this.fetchSubcategoryFields(this.selectedSubcategory);
    });
  }

}
