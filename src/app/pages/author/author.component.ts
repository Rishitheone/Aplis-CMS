import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';

import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';



@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss'],
})
export class AuthorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
