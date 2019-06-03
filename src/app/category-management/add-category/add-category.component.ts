import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  categories = [];
  newCategory: string;
  successMsg = false;
  duplicatMsg = false;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
  }

  saveNewCategory() {

    const exist = this.doesCategoryExist();

    if (exist) {
      this.duplicatMsg = true;
    } else {
      this.writeToDB();
    }
  }

  doesCategoryExist() {
    for (const category of this.categories) {
      if (category.name.toLowerCase() === this.newCategory.toLowerCase()) {
        return true;
      }
    }
    return false;
  }

  writeToDB() {
    this.categoryService.saveNewCategory(this.newCategory).subscribe(
      (res) => {
        if (res.success) {
          this.successMsg = true;
          this.duplicatMsg = false;
        }
      },
      err => {
        console.error(err);
      }
    );
  }

}
