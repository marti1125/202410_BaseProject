import { Component, OnInit, Input } from '@angular/core';
import { BookDetail } from '../bookdetail';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  @Input() bookDetail!: BookDetail;

  constructor() { }

  ngOnInit() {
  }

}
