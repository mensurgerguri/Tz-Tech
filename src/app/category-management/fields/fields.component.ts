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

  constructor(private categoryService: CategoryService, private auth: AuthenticationService) { }

  ngOnInit() {
  }

  saveField() {
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

  deleteField(field: any) {
    this.categoryService.deleteField(field.field_id).subscribe(() => {
      this.fetchAllFields();
    });
  }

  fetchAllFields() {
    this.categoryService.getAllFields().subscribe((allFields: []) => {
      this.allFields = allFields;
    });
  }
}
