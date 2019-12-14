import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AuthorComponent } from './pages/author/author.component';
import { BookComponent } from './pages/book/book.component';
import { AuthorsListComponent } from './pages/author/authors-list/authors-list.component';
import { AuthorsComponent } from './pages/author/authors/authors.component';
import { CategoryComponent } from './pages/category/category.component';
import { SeriesComponent } from './pages/series/series.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent,data:{title:'Content Management System'} },
  { path: 'home/author', component: AuthorComponent },
  { path: 'home/category', component: CategoryComponent,data:{title:'Define Categories'} },
  { path: 'home/authors', component: AuthorsComponent},
  { path: 'home/book', component: BookComponent,data:{title:'Book Publisher'} },
  { path: 'home/Author-list', component: AuthorsListComponent,data:{title:'Auhor And Publisher'} },
  { path: 'home/series', component: SeriesComponent,data:{title:'Book Series'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
