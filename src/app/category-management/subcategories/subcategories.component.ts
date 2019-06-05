import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/services/category.service';
import { MatDialog } from '@angular/material';
import { AddSubcategoryComponent } from '../add-subcategory/add-subcategory.component';

@Component({
  selector: 'app-subcategories',
  templateUrl: './subcategories.component.html',
  styleUrls: ['./subcategories.component.css']
})
export class SubcategoriesComponent implements OnInit {

  subCategories: [];
  selectedCategory: any;

  constructor(private categoryService: CategoryService, private dialog: MatDialog) {
    this.categoryService.selectedCategory.subscribe(selectedCategory => {
      this.selectedCategory = selectedCategory;
      this.fetchSubcategories();
  });
  }

  ngOnInit() {
  }

  fetchSubcategories() {
    if (this.selectedCategory) {
      this.categoryService.getSubcategories(this.selectedCategory.id).subscribe((subCategories: []) => {
        this.subCategories = subCategories;
      });
    }
  }

  openAddSubcategoryDialog() {
    const dialogRef = this.dialog.open(AddSubcategoryComponent);
    const instance = dialogRef.componentInstance;
    instance.selectedCategory = this.selectedCategory;
    instance.subCategories = this.subCategories;
  }

}
