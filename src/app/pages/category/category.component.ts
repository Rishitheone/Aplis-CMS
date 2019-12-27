import { Component, OnInit } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CategoryFormComponent } from './category-form/category-form.component';
import { UserService } from 'src/app/shared/user.service';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/shared/category.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  public Primary = [];
  public Secondary = [];
  public Higher = [];
  public AllSubCategory = [];
  isHidden = true;
  isLoading=true;

  public parent_category_id = '';
  constructor(public dialog: MatDialog, private service: UserService, private _allCategory: CategoryService,
    private _router: Router, private toastr: ToastrService) { }

  onSelect(selectedItem: any) {
    // this.parent_category_id = selectedItem.id;
    this.callSubCateApi(selectedItem.id);
    // console.log("Selected item Id: ", this.parent_category_id); // You get the Id of the selected item here

  }
  onDelete(id: any) {
    this.deleteCategory(id.id);

  }
  onDeleteSubCategory(id: any) {
    this.deleteSubCategory(id.id);

  }

  ngOnInit() {

    // this.service.refreshList();
    this._allCategory.getDropPrimary()
      .subscribe(
        data =>
          this.Primary = data.data,
        err => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              this._router.navigate(['/login'])
            }
          }
        }
      )

    this._allCategory.getDropSecondary()
      .subscribe(
        data => this.Secondary = data.data,
        err => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              this._router.navigate(['/login'])
            }
          }
        }
      )

    this._allCategory.getDropHigher()
      .subscribe(
        data => this.Higher = data.data,
        err => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              this._router.navigate(['/login'])
            }
          }
        }
      )



  }
  populationForm() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "80%";
    this.dialog.open(CategoryFormComponent, dialogConfig);
  }
  callSubCateApi(selectedItem) {
    this._allCategory.getAllSubCategory(selectedItem)
      .subscribe(
        data => {
          this.isLoading = false;
          this.AllSubCategory = data.data
        },
        err => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              this._router.navigate(['/login'])
            }
          }
        }
      )
  }
  deleteCategory(id: number) {
    this._allCategory.deleteCategory(id)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      )
  }
  deleteSubCategory(id: number) {
    this._allCategory.deleteSubCategory(id)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      )
  }
}
