import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/services/category.service';

@Component({
  selector: 'app-add-subcategory-fields',
  templateUrl: './add-subcategory-fields.component.html',
  styleUrls: ['./add-subcategory-fields.component.css']
})
export class AddSubcategoryFieldsComponent implements OnInit {

  selectedCategory: any;
  categoryFields = [];
  allFields = [];
  newCategoryField = '';
  successMsg = false;
  selectedValue;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getAllFields().subscribe((allFields: []) => {
      this.allFields = allFields;
    });
  }

  saveNewCategoryField() {
    this.categoryService.saveNewCategoryField({ identifier: 1, categoryID: this.selectedCategory.id, fieldID: this.selectedValue.field_id }).subscribe(
      (res) => {

        if (res.success) {
          this.successMsg = true;
          // this.fetchSubcategories();
          // this.savedSubcategory = this.newSubcategory.valueOf();
        }
      },
      err => {
        console.error(err);
      }
    );
  }

}
