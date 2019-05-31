import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  newCategory: string;
  successMsg = false;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
  }

  saveNewCategory() {
    this.categoryService.saveNewCategory(this.newCategory).subscribe(
      (res) => {

        if (res.success) {
            this.successMsg = true;
        }
      },
      err => {
        console.error(err);
      }
    );
  }

}
