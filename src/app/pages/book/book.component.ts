import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Language } from '../author/authors/authors.component';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  isLinear = true;
  pictureUrl = '';
  coverUrl = '';
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  languages: Language[] = [
    { value: 0, viewValue: 'English' },
    { value: 1, viewValue: 'Hindi' },
    { value: 2, viewValue: 'Marathi' }
  ];
  series = [
    { value: 0, viewValue: 'Book-1' },
    { value: 1, viewValue: 'Book-3' },
    { value: 2, viewValue: 'Book-2' }
  ];

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      // called once readAsDataURL is completed
      // reader.onload = (event) => {
      //   this.pictureUrl = event.target.result;
      // }
    }
  }
  onSelectFileCP(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      // called once readAsDataURL is completed
      // reader.onload = (event) => { // called once readAsDataURL is completed
      //   this.coverUrl = event.target.result;
      // }
    }
  }
}