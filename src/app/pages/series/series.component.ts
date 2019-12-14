import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SeriesFormComponent } from './series-form/series-form.component';
interface Series {
  subject: string;
  code: string;
  date: string;
  status: string;
}
@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {

  dataSource: Series[] = [
    { subject: 'Phemistry class V', code: 'CHM5', date: '12/04/2016', status: 'Published' },
    { subject: 'Math class V', code: 'MT4', date: '12/04/2016', status: 'Published' },
    { subject: 'Physics class V', code: 'PC4', date: '12/04/2016', status: 'Published' },
    { subject: 'Bio class V', code: 'CHM5', date: '12/04/2016', status: 'Published' },
    { subject: 'Electrical class V', code: 'CHM5', date: '12/04/2016', status: 'Published' },
    { subject: 'English class V', code: 'ET5', date: '12/04/2016', status: 'Published' },
  ]
  constructor(public dialog: MatDialog ) { }
  openDialog() {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '80%';
    this.dialog.open(SeriesFormComponent, dialogConfig);
  };

  

  ngOnInit() {
  }

}
