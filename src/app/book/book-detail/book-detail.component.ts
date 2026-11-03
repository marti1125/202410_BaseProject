import { Component, OnInit, Input } from '@angular/core';
import { BookDetail } from '../bookdetail';
import { BookserviceService } from '../bookservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  bookId!: string;
  @Input() bookDetail!: BookDetail;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookserviceService
  ) { }

  getBook() {
    this.bookService.getBook(this.bookId).subscribe(book => {
      this.bookDetail = book;
    });
  }

  ngOnInit() {
    if (this.bookDetail === undefined) {
      this.bookId = this.route.snapshot.paramMap.get('id')!;
      if (this.bookId) {
        this.getBook();
      }
    }
  }

}
