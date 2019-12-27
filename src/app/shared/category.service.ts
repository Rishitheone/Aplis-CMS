import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { savCategoryObject, DropUser } from './all.model';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private valueid = "";
  // types:DropUser[];
  private _AllCategory = "http://35.173.187.82/aplis/public/api/admin/get-all-categories?type=";
  private _deleteSeries = "http://35.173.187.82/aplis/public/api/admin/delete-category?"
  private _saveCategory = "http://35.173.187.82/aplis/public/api/admin/save-category"
  private _AllSubCategory = "http://35.173.187.82/aplis/public/api/admin/get-sub-categories?parent_category_id="

  constructor(private http: HttpClient) {
  }


  getAllSubCategory(valueid): Observable<any> {
    return this.http.get<any>(this._AllSubCategory + valueid);
  }

  saveAllCategory(user): Observable<savCategoryObject> {
    return this.http.post<savCategoryObject>(this._saveCategory, user, {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })

    })
  }

  getAllDropDown() {
    return this.http.get<any>(this._AllCategory);
  }

  getDropPrimary(): Observable<any> {
    return this.http.get<any>(this._AllCategory + 'primary');
  }
  getDropSecondary(): Observable<any> {
    return this.http.get<any>(this._AllCategory + 'secondary');
  }
  getDropHigher(): Observable<any> {
    return this.http.get<any>(this._AllCategory + 'higher');
  }
  deleteCategory(id): Observable<number[]> {
    return this.http.post<number[]>(this._deleteSeries +'category_id='+ id, id)

  }
  deleteSubCategory(id): Observable<number[]> {
    return this.http.post<number[]>(this._deleteSeries +'category_id='+ id, id)

  }

}
