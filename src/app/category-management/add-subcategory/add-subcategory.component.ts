import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/services/category.service';

@Component({
  selector: 'app-add-subcategory',
  templateUrl: './add-subcategory.component.html',
  styleUrls: ['./add-subcategory.component.css']
})
export class AddSubcategoryComponent implements OnInit {

  subCategories: any[] = [];
  selectedCategory: any;
  newSubcategory = '';
  successMsg = false;
  newSubcategoryTried = '';
  duplicatMsg = false;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.fetchSubcategories();
  }

  fetchSubcategories() {
    if (this.selectedCategory !== undefined) {
      this.categoryService.getSubcategories(this.selectedCategory.id).subscribe((subCategories: []) => {
        this.subCategories = subCategories;
      });
    }
  }

  saveNewSubcategory() {
    const exist = this.doesSubcategoryExist();

    if (exist) {
      this.duplicatMsg = true;
    } else if (this.newSubcategory !== '') {
      this.duplicatMsg = false;
      this.writeToDB();
    }
    this.newSubcategoryTried = this.newSubcategory;
  }

  doesSubcategoryExist() {
    for (const subcategory of this.subCategories) {
      if (subcategory.name.toLowerCase() === this.newSubcategory.toLowerCase()) {
        return true;
      }
    }
    return false;
  }


  writeToDB() {
    this.categoryService.saveNewSubcategory({ categoryID: this.selectedCategory.id, subcategoryName: this.newSubcategory }).subscribe(
      (res) => {
        if (res.success) {
          this.successMsg = true;
          this.fetchSubcategories();
        }
      },
      err => {
        console.error(err);
      }
    );
  }

}
