import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../shared/services/category.service';

@Component({
  selector: 'app-category-management',
  templateUrl: './category-management.component.html',
  styleUrls: ['./category-management.component.css']
})
export class CategoryManagementComponent implements OnInit {

  categories: [];
  categoryFields: [];
  subCategories: [];
  subCategoryFields: [];

  constructor(private categoriesService: CategoryService) { }

  ngOnInit() {
    this.categoriesService.getCategories().subscribe((categories: []) => {
      this.categories = categories;
    });
  }

  getSubcategories(id: number) {
    this.categoriesService.getSubcategories(id).subscribe((subCategories: []) => {
      this.subCategories = subCategories;
      this.subCategoryFields = [];
    });
    this.getCategoryFields(id);
  }

  getSubcategoryFields(id: number) {
    this.categoriesService.getSubcategoryFields(id).subscribe((subCategoryFields: []) => {
      this.subCategoryFields = subCategoryFields;
    });
  }

  getCategoryFields(id: number) {
    this.categoriesService.getCategoryFields(id).subscribe((categoryFields: []) => {
      this.categoryFields = categoryFields;
    });
  }
}
