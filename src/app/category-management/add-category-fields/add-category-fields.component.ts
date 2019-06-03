import { Component, OnInit, DoCheck } from '@angular/core';
import { CategoryService } from 'src/app/shared/services/category.service';
import { MatDialog } from '@angular/material';
import { FieldsComponent } from '../fields/fields.component';

@Component({
  selector: 'app-add-category-fields',
  templateUrl: './add-category-fields.component.html',
  styleUrls: ['./add-category-fields.component.css']
})
export class AddCategoryFieldsComponent implements OnInit {


  selectedCategory: any;
  categoryFields = [];
  allFields = [];
  newField = '';
  successMsg = false;
  selectedValue;

  constructor(private categoryService: CategoryService, private dialog: MatDialog) { }


  fetchAllFields() {
    this.categoryService.getAllFields().subscribe((allFields: []) => {
      this.allFields = allFields;
    });
  }

  ngOnInit() {
    this.categoryService.getAllFields().subscribe((allFields: []) => {
      this.allFields = allFields;
    });
  }

  fetchCategoryFields() {
    this.categoryService.getCategoryFields(this.selectedCategory.id).subscribe((categoryFields: []) => {
      this.categoryFields = categoryFields;
    });
  }

  saveNewCategoryField() {
    this.categoryService.saveNewCategoryField({ identifier: 1, categoryID: this.selectedCategory.id, fieldID: this.selectedValue.field_id }).subscribe(
      (res) => {

        if (res.success) {
          this.successMsg = true;
          this.ngOnInit();
          this.fetchCategoryFields();
          this.newField = this.getFieldName(this.selectedValue.field_id);
        }
      },
      err => {
        console.error(err);
      }
    );
  }

  private getFieldName(id: number): string {
    for (let i = 0; i < this.allFields.length; i++) {
      const element = this.allFields[i];
      if (element.field_id === id) {
        return element.name;
      }
    }
  }

  opetFieldsDialog() {
    const dialogRef = this.dialog.open(FieldsComponent);
    const instance = dialogRef.componentInstance;
    instance.allFields = this.allFields;
  }
}
