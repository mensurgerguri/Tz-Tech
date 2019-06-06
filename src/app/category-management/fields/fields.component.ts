import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/services/category.service';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.css']
})
export class FieldsComponent implements OnInit {

  allFields = [];
  newField = '';
  successMsg = false;
  duplicatMsg = false;
  cannotDeleteMsg = false;
  newFieldTried: string;
  fieldsUsage = [];

  constructor(private categoryService: CategoryService, private auth: AuthenticationService) { }

  ngOnInit() {
    this.categoryService.getFieldsUsage().subscribe((fieldsUsage: []) => {
      this.fieldsUsage = fieldsUsage;
    });
  }

  saveField() {
    const exist = this.doesFieldExist();

    if (exist) {
      this.duplicatMsg = true;
    } else if (this.newField !== '') {
      this.duplicatMsg = false;
      this.cannotDeleteMsg = false;
      this.writeToDB();
    }
    this.newFieldTried = this.newField;
  }

  writeToDB() {
    this.categoryService.saveNewField({ newField: this.newField }).subscribe(
      (res) => {
        if (res.success) {
          this.successMsg = true;
          this.fetchAllFields();
          this.categoryService.allFields.next(this.allFields);
        }
      },
      err => {
        console.error(err);
      }
    );
  }

  doesFieldExist() {
    for (const field of this.allFields) {
      if (field.name.toLowerCase() === this.newField.toLowerCase()) {
        return true;
      }
    }
    return false;
  }

  deleteField(field: any) {

    const exist = this.doesRecordExist(field);

    if (exist) {
      this.cannotDeleteMsg = true;
    } else {
      this.duplicatMsg = false;
      this.cannotDeleteMsg = false;
      this.categoryService.deleteField(field.field_id).subscribe(() => {
        this.fetchAllFields();
      }
      );
    }
  }

  doesRecordExist(field: any) {
    for (const rec of this.fieldsUsage) {
      if (rec.field_id === field.field_id) {
        return true;
      }
    }
    return false;
  }

  fetchAllFields() {
    this.categoryService.getAllFields().subscribe((allFields: []) => {
      this.allFields = allFields;
    });
  }
}
