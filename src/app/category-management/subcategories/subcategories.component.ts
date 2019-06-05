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
  selectedSubcategory: any;

  constructor(private categoryService: CategoryService, private dialog: MatDialog) {
    dialog.afterAllClosed.subscribe(() => {
      this.ngOnInit();
    });

    this.categoryService.selectedCategory.subscribe(selectedCategory => {
      this.selectedCategory = selectedCategory;
      this.fetchSubcategories();
    });
  }

  ngOnInit() {
    this.fetchSubcategories();
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

  deleteSubcategory(category: any) {
    this.categoryService.deleteSubcategory(category.subcat_id).subscribe(() => {
      this.fetchSubcategories();
    });
  }

  fetchSubcategoriesFields(selectedSubcategory: any) {
    this.selectedSubcategory = selectedSubcategory;
    this.categoryService.selectedSubcategory.next(this.selectedSubcategory);
  }

}
