import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SeriesFormComponent } from './series-form/series-form.component';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { SeriesService } from 'src/app/shared/series.service';
import { allSeries, saveSeries, DatumSeries } from 'src/app/shared/all.model';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {

  dataSource: DatumSeries[] = []
  isLoading = true;
  constructor(public dialog: MatDialog, private _router: Router, private toastr: ToastrService,
    public service: SeriesService, private fb: FormBuilder, ) { }

  onDelete(id: any) {
    this.deleteSeries(id.id);
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '80%';
    this.dialog.open(SeriesFormComponent, dialogConfig);
  };
  onEdit(series) {
    this.service.populateForm(series);
    console.log(series)
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '80%';
    this.dialog.open(SeriesFormComponent, dialogConfig);
  }



  ngOnInit() {
    this.service.getAllSeries()
      .subscribe(
        data => {
          this.isLoading = false,
          this.dataSource = data.data},
        err => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              this._router.navigate(['/login'])
            }
          }
        }
      )
  }

  deleteSeries(id: number) {
    if (confirm('Are you sure to delete this record ?')) {
      this.service.deleteSeries(id)
        .subscribe(
          res => {
            this.toastr.warning('Deleted successfully', 'Payment Detail Register');
          },
          err => {
            console.log(err);
          }
        )
    }
  }

}
