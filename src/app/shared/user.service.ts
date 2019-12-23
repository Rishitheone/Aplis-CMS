import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { RootObject } from './all.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private _logInUrl = "http://35.173.187.82/aplis/public/api/admin/sign-in";
  
  constructor(private http:HttpClient,private _router:Router) { }
  
  loginUser(user){
    return this.http.post<RootObject>(this._logInUrl,user)
  }
  loggedIn(){
    return !!localStorage.getItem('token')
  }
  getToken(){
    return localStorage.getItem('token')
  }
  logoutUser(){
    localStorage.removeItem('token')
    this._router.navigate(['/login'])
  }
  

}