import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/shared/category.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {
  
  public changeStatus:string;

  ///This id for save and publish value
  darft ="in_draft";
  Publish ="published";

  //this is for dropdown value
  selectedFood2: string;

  // this is for fetch value for second dropdown
  public primary = [];
  public secondary = [];
  public higher = [];

  // 1st dropdown static value
  types = [
    {value: 'primary', viewValue: 'Primary'},
    {value: 'secondary', viewValue: 'Secondary'},
    {value: 'higher', viewValue: 'Higher'}
  ];
  
  // form value
  formData = this.fb.group({
    status:['published'],
    name: [''],
    description: [''],
    type: [''],
    parent_category_id: [],
    tags: this.fb.array([
      this.fb.control('')
    ])
  });

  // for add keywords
  get tags() {
    return this.formData.get('tags') as FormArray;
  }
  constructor(private service:CategoryService,
    private toastr: ToastrService,private fb: FormBuilder,private _http:CategoryService,private _router:Router) { }

  ngOnInit() {
    // value for primary dropdown
     this._http.getDropPrimary()
       .subscribe(data => this.primary = data.data,
        err => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              this._router.navigate(['/login'])
            }
          }
        })
     
        // value for secondary dropdown
        this._http.getDropSecondary()
       .subscribe(data => this.secondary = data.data,
        err => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              this._router.navigate(['/login'])
            }
          }
        })
       // value for Heigher dropdown
        this._http.getDropHigher()
       .subscribe(data => this.higher = data.data,
        err => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              this._router.navigate(['/login'])
            }
          }
        })
  }
  addAlias() {
    this.tags.push(this.fb.control(''));
  }

  // For form submit
  onSubmit(user){
    // this.changeStatus = this.Publish;
    console.log(this.formData.value)
    const data = JSON.stringify(this.formData.value);
      this.service.saveAllCategory(data)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      )
    }

    // for form draft
    onDraft(){
      this.changeStatus =this.darft;
      console.log(this.formData.value)
     
    // const data = JSON.stringify(this.formData.value);
    //   this.service.saveAllCategory(data)
    //   .subscribe(
    //     res => console.log(res),
    //     err => console.log(err)
    //   )
    }

     
 
}

