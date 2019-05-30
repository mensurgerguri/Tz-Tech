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
  successMsg = false;
  selectedValue;

  constructor(private categoryService: CategoryService, private dialog: MatDialog) { }

  ngOnInit() {
    this.categoryService.getAllFields().subscribe((allFields: []) => {
      this.allFields = allFields;
    });
  }

  fetchSubcategoryFields() {
    this.categoryService.getSubcategoryFields(this.selectedSubcategory.subcat_id).subscribe((subcategoryFields: []) => {
      this.subcategoryFields = subcategoryFields;
    });
  }

  saveNewSubcategoryField() {
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
