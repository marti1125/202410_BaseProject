import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { AuthorDetail } from './author-detail';
import { Author } from './author';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private apiUrl = environment.baseUrl + 'authors';

  constructor(private http: HttpClient) { }

  getAuthors(): Observable<AuthorDetail[]> {
    return this.http.get<AuthorDetail[]>(this.apiUrl);
  }

  getAuthor(id: string): Observable<AuthorDetail> {
    return this.http.get<AuthorDetail>(`${this.apiUrl}/${id}`);
  }

  createAuthor(author: Author): Observable<Author> {
    return this.http.post<Author>(this.apiUrl, author);
  }

}
