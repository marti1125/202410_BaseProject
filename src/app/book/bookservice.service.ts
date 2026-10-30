import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookDetail } from './bookdetail';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {
  private apiUrl: string = environment.baseUrl + 'books';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<BookDetail[]> {
    return this.http.get<BookDetail[]>(this.apiUrl);
  }

}
