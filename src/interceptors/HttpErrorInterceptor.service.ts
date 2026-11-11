import {
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Injectable, inject } from '@angular/core';
 
 
 @Injectable()
 export class HttpErrorInterceptorService implements HttpInterceptor {
  private toastrService = inject(ToastrService);
  constructor() { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        catchError((httpErrorResponse: HttpErrorResponse) => {
          let errorMesagge = '';
          let errorType = '';
 
 
          if (httpErrorResponse.error instanceof HttpErrorResponse) {
            errorType = "Client side error"
            errorMesagge = httpErrorResponse.statusText;
          } else {
            errorType = "Server side error"
            if (httpErrorResponse.status === 0) {
              errorMesagge = "No hay conexión con el servidor";
            } else {
              errorMesagge = `${httpErrorResponse.status}: ${httpErrorResponse.statusText}`;
            }
           
            if (httpErrorResponse.statusText !== 'OK') {
              this.toastrService.error(errorMesagge, errorType, { closeButton: true })
            }
          }
          return throwError(()=> new Error(errorMesagge));
        })
      )
  }
 }