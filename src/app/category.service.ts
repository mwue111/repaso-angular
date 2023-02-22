import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url = 'http://localhost/api/categories/';
  reqHeaders = new HttpHeaders({
    'Content-Type':'application/json'
  });

  constructor(
    private http: HttpClient,
  ) { }

  getCategories(): Observable<Category>{
    return this.http.get<Category>(this.url);
  }

  createCategory(category:Category): Observable<Category> {
    return this.http.post(this.url, category, {headers:this.reqHeaders});
  }

  updateCategory(id:number, category:Category): Observable<Category> {
    return this.http.put(this.url + id + '/', category, {headers:this.reqHeaders});
  }

  deleteCategory(id:number) {
    return this.http.delete(this.url + id + '/');
  }




}
