import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/services/category.service';
import { MatDialog } from '@angular/material';
import { FieldsComponent } from '../fields/fields.component';

@Component({
  selector: 'app-add-subcategory-fields',
  templateUrl: './add-subcategory-fields.component.html',
  styleUrls: ['./add-subcategory-fields.component.css']
})
export class AddSubcategoryFieldsComponent implements OnInit {

  selectedSubcategory: any;
  subcategoryFields = [];
  allFields = [];
  newField = '';
  newFieldTried = '';
  successMsg = false;
  duplicatMsg = false;
  selectedValue;

  constructor(private categoryService: CategoryService, private dialog: MatDialog) {
    this.categoryService.allFields.subscribe(allFields => {
      this.allFields = allFields;
      this.fetchAllFields();
    });
  }

  ngOnInit() {
    this.categoryService.getAllFields().subscribe((allFields: []) => {
      this.allFields = allFields;
      this.selectedValue = this.allFields[0];
    });
  }

  fetchSubcategoryFields() {
    this.categoryService.getSubcategoryFields(this.selectedSubcategory.subcat_id).subscribe((subcategoryFields: []) => {
      this.subcategoryFields = subcategoryFields;
    });
  }

  fetchAllFields() {
    this.categoryService.getAllFields().subscribe((allFields: []) => {
      this.allFields = allFields;
    });
  }

  saveNewSubcategoryField() {
    const exist = this.doesSubcategoryFieldExist();

    if (exist) {
      this.duplicatMsg = true;
    } else {
      this.duplicatMsg = false;
      this.writeToDB();
    }
    this.newFieldTried = this.getFieldName(this.selectedValue.field_id);
  }

  writeToDB() {
    this.categoryService.saveNewSubcategoryField({ identifier: 2, subcategoryID: this.selectedSubcategory.subcat_id, fieldID: this.selectedValue.field_id }).subscribe(
      (res) => {
        if (res.success) {
          this.successMsg = true;
          this.fetchSubcategoryFields();
          this.newField = this.getFieldName(this.selectedValue.field_id);
        }
      },
      err => {
        console.error(err);
      }
    );
  }

  doesSubcategoryFieldExist() {
    for (const field of this.subcategoryFields) {
      if (field.field_id === this.selectedValue.field_id) {
        return true;
      }
    }
    return false;
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
