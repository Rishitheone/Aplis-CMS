import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, NgForm } from '@angular/forms';
import { UserService } from 'src/app/shared/user.service';

export interface Language {
  value: number;
  viewValue: string;
}
@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {

isLinear = true;
pictureUrl = '';
coverUrl = '';
languages: Language[] = [
  { value: 0, viewValue: 'English' },
  { value: 1, viewValue: 'Hindi' },
  { value: 2, viewValue: 'Marathi' }
];

constructor(private _formBuilder: FormBuilder,private service: UserService,
  private toastr: ToastrService) { }

ngOnInit() {
  this.resetForm();
}

resetForm(form?: NgForm) {
  if (form != null)
    form.resetForm();
  this.service.formData = {
    FirstName: '',
  LastName: '',
  description: '',
  keyword1: '',
  keyword2: '',
  keyword3: '',
  keyword4: '',
  keyword5: '',
  keyword6: '',
  keyword7: '',
  }
}

onSubmit(form: NgForm) {
  if (form.value.EmployeeID == null)
    this.insertRecord(form);
  else
    this.updateRecord(form);
}

insertRecord(form: NgForm) {
  this.service.postEmployee(form.value).subscribe(res => {
    this.toastr.success('Inserted successfully', 'EMP. Register');
    this.resetForm(form);
    this.service.refreshList();
  });
}

updateRecord(form: NgForm) {
  this.service.putEmployee(form.value).subscribe(res => {
    this.toastr.info('Updated successfully', 'EMP. Register');
    this.resetForm(form);
    this.service.refreshList();
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