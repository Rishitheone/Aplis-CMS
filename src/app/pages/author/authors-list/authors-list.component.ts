import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { ToastrService } from 'ngx-toastr';
import { Author } from 'src/app/shared/author.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.scss']
})
export class AuthorsListComponent implements OnInit {

  constructor(private service: UserService,
    private toastr: ToastrService,private router: Router) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(aut: Author) {
    this.service.formData = Object.assign({}, aut);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteEmployee(id).subscribe(res => {
        this.service.refreshList();
        this.toastr.warning('Deleted successfully', 'EMP. Register');
      });
    }
  }
  addAuthor(){
     this.router.navigateByUrl('home/authors')
  }

}
