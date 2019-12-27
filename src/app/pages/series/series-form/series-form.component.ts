import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { SeriesService } from 'src/app/shared/series.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-series-form',
  templateUrl: './series-form.component.html',
  styleUrls: ['./series-form.component.scss']
})
export class SeriesFormComponent implements OnInit {


  constructor(private fb: FormBuilder, public service: SeriesService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(form: NgForm) {
    if (form.value.id == null)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.saveSeries(form.value).subscribe
      (res => {
        this.toastr.success('Inserted successfully', 'Series Register');
        console.log(res)
      },
        err => {
          console.log(err)
        }
      );
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.form = {
      status: '',
      series_code: '',
      description: '',
      title: '',
    }
  }
  updateRecord(form: NgForm) {
    this.service.updateSeries(form.value).subscribe(res => {
      this.toastr.info('Updated successfully', 'EMP. Register');
      this.resetForm(form);
    });

  }

}