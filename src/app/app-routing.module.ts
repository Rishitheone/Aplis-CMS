import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AuthorComponent } from './pages/author/author.component';
import { BookComponent } from './pages/book/book.component';
import { AuthorsListComponent } from './pages/author/authors-list/authors-list.component';
import { AuthorsComponent } from './pages/author/authors/authors.component';
import { CategoryComponent } from './pages/category/category.component';
import { SeriesComponent } from './pages/series/series.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo:'/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent,canActivate:[AuthGuard]},
  { path: 'home/author', component: AuthorComponent,canActivate:[AuthGuard] },
  { path: 'home/category', component: CategoryComponent,canActivate:[AuthGuard]},
  { path: 'home/authors', component: AuthorsComponent,canActivate:[AuthGuard]},
  { path: 'home/book', component: BookComponent,canActivate:[AuthGuard]},
  { path: 'home/Author-list', component: AuthorsListComponent ,canActivate:[AuthGuard]},
  { path: 'home/series', component: SeriesComponent,canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
