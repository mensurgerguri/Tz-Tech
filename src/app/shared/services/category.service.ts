import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  public saveNewCategory(newCategory: string): Observable<any> {
    return this.http.post(`http://localhost:8080/categories/saveNewCategory`, {newCategory: newCategory});
  }
}
