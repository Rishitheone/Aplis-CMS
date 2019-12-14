import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Author } from './author.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  formData  : Author;
  list : Author[];
  readonly rootURL ="http://localhost:7741/api"

  constructor(private http : HttpClient) { }

  postEmployee(formData : Author){
   return this.http.post(this.rootURL+'/Author',formData);
    
  }

  refreshList(){
    this.http.get(this.rootURL+'/Author')
    .toPromise().then(res => this.list = res as Author[]);
  }

  putEmployee(formData : Author){
    return this.http.put(this.rootURL+'/Author/'+formData.FirstName,formData);
     
   }

   deleteEmployee(id : number){
    return this.http.delete(this.rootURL+'/Author/'+id);
   }
}
