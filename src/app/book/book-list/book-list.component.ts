import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookDetail } from '../bookdetail';
import { BookserviceService } from '../bookservice.service';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Array<BookDetail> = [];

  selectedBook!: BookDetail;
  selected: boolean = false;

  onSelected(book: BookDetail): void {
    this.selectedBook = book;
    this.selected = true;
  }

  constructor(private bookService: BookserviceService) { }

  getBooks() {
    this.bookService.getBooks().subscribe((data: BookDetail[]) => {
      this.books = data;
    });
  }

  ngOnInit() {
    this.getBooks();
  }

}
