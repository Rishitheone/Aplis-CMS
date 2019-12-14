import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {
  
  languages = [
    { value: 0, viewValue: 'Primary' },
    { value: 1, viewValue: 'Middle' },
  ];
  constructor() { }

  ngOnInit() {
  }

}
