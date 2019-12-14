import { Component, OnInit } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { MatDialog } from '@angular/material/dialog';
import { CategoryFormComponent } from './category-form/category-form.component';

interface FoodNode {
  name: string;
  date:string;
  status:string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Primary Education',
    date:"12/04/2019",
    status:'Publish',
    children: [
      {name: 'Class 5', date:"13/05/2019",status:'Publish',},
      {name: 'Class 4', date:"16/11/2019",status:'Publish',},
      {name: 'Class 2',date:"1/07/2019",status:'Publish',},
    ]
  }, {
    name: 'Middle Education',
    date:"11/12/2018",
    status:'Publish',
    children: [
      {name: 'Class 5', date:"13/05/2019",status:'Publish',},
      {name: 'Class 4', date:"16/11/2019",status:'Publish',},
    ]
  },
];

/**
 * @title Tree with nested nodes
 */

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent  {
  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();

  constructor(public dialog: MatDialog) {
    this.dataSource.data = TREE_DATA;
  }

  openDialog() {
    const dialogRef = this.dialog.open(CategoryFormComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;
}