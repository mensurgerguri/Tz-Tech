import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  public getCategories() {
    return this.http.get('http://localhost:8080/categories/getCategories');
  }

  public getSubcategories(id: number) {
    return this.http.get('http://localhost:8080/categories/getSubCategories/' + id);
  }

  public getSubcategoryFields(id: number) {
    return this.http.get('http://localhost:8080/categories/getSubCategoryFields/' + id);
  }

  public getCategoryFields(id: number) {
    return this.http.get('http://localhost:8080/categories/getCategoryFields/' + id);
  }
}
