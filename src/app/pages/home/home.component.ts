import { Component, OnInit } from '@angular/core';
export interface Short {
  value: number;
  viewValue: string;
}
export interface Filter {
  value: number;
  viewValue: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  short: Short[] = [
    {value: 0, viewValue: 'Last Modified'},
    {value: 1, viewValue: 'Date submitted'},
    {value: 2, viewValue: 'Title'},
    {value: 3, viewValue: 'Author'},
    {value: 4, viewValue: 'Publisher'}
  ];
  filter:Filter[]=[
    {value: 0, viewValue: 'All'},
    {value: 1, viewValue: 'Draft'},
    {value: 2, viewValue: 'Live'},
    {value: 3, viewValue: 'Blocked'},
  ]

  constructor() { }

  ngOnInit() {
  }

}
