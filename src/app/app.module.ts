import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HomeComponent } from './pages/home/home.component';
import { AuthorComponent } from './pages/author/author.component';
import { BookComponent } from './pages/book/book.component';
import { MaterialModule } from './material/material.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { UserService } from './shared/user.service';
import { AuthorsComponent } from './pages/author/authors/authors.component';
import { AuthorsListComponent } from './pages/author/authors-list/authors-list.component';
import { CategoryComponent } from './pages/category/category.component';
import { CategoryFormComponent } from './pages/category/category-form/category-form.component';
import { SeriesComponent } from './pages/series/series.component';
import { SeriesFormComponent } from './pages/series/series-form/series-form.component';
import { LoginComponent } from './login/login.component';
import { AuthInterceptor } from './_guards/auth.interceptor';
import {TreeTableModule} from 'primeng/treetable';
import { CategoryDispalyComponent } from './pages/category/category-dispaly/category-dispaly.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AuthorComponent,
    BookComponent,
    AuthorsComponent,
    AuthorsListComponent,
    CategoryComponent,
    CategoryFormComponent,
    SeriesComponent,
    SeriesFormComponent,
    LoginComponent,
    CategoryDispalyComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TreeTableModule,
    //Matrial Module
    MaterialModule,
    HttpClientModule,
    ToastrModule.forRoot({
      progressBar: true
    }),
  ],
  exports:[MaterialModule],
  providers: [UserService,{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  } ],
  bootstrap: [AppComponent],
  entryComponents: [
    CategoryFormComponent,
    SeriesFormComponent
  ],
})
export class AppModule { }
