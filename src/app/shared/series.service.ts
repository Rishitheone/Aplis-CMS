import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { saveSeries, allSeries } from './all.model';
import { FormBuilder, FormControl } from '@angular/forms';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  form: saveSeries;
  private _saveSeries = "http://35.173.187.82/aplis/public/api/admin/save-series"
  private _getAllSeries = "http://35.173.187.82/aplis/public/api/admin/get-all-series"
  private _deleteSeries = "http://35.173.187.82/aplis/public/api/admin/delete-series?series_id="
  private _updateSeries = "http://35.173.187.82/aplis/public/api/admin/update-series"


  constructor(private _http: HttpClient, private fb: FormBuilder, ) { }

  saveSeries(form: saveSeries): Observable<saveSeries> {
    return this._http.post<saveSeries>(this._saveSeries, form, {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    })
  }

  updateSeries(form: saveSeries): Observable<saveSeries[]> {
    return this._http.post<any[]>(this._updateSeries, form, {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    })
  }

  getAllSeries(): Observable<allSeries> {
    return this._http.get<allSeries>(this._getAllSeries);
  }

  deleteSeries(id): Observable<number[]> {
    return this._http.post<number[]>(this._deleteSeries + id, id)
  }

  populateForm(series) {
    // this.form.setValue(_.omit(series));
  }
}
