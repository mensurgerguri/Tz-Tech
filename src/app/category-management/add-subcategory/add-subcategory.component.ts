import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/services/category.service';

@Component({
  selector: 'app-add-subcategory',
  templateUrl: './add-subcategory.component.html',
  styleUrls: ['./add-subcategory.component.css']
})
export class AddSubcategoryComponent implements OnInit {

  subCategories: [] = [];
  selectedCategory: any;
  newSubcategory = '';
  successMsg = false;
  savedSubcategory = '';


  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.fetchSubcategories();
  }

  fetchSubcategories() {
    this.categoryService.getSubcategories(this.selectedCategory.id).subscribe((subCategories: []) => {
      this.subCategories = subCategories;
    });
  }

  saveNewSubcategory() {
    this.categoryService.saveNewSubcategory({ categoryID: this.selectedCategory.id, subcategoryName: this.newSubcategory }).subscribe(
      (res) => {

        if (res.success) {
          this.successMsg = true;
          this.fetchSubcategories();
          this.savedSubcategory = this.newSubcategory.valueOf();
        }
      },
      err => {
        console.error(err);
      }
    );
  }

}
