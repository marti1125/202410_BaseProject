import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BookRoutingModule } from './book-routing.module';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BookRoutingModule
  ],
  exports: [BookListComponent],
  declarations: [BookListComponent, BookDetailComponent]
})
export class BookModule { }
