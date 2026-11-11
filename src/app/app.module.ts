import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BookModule } from './book/book.module';
import { BookRoutingModule } from './book/book-routing.module';
import { EditorialModule } from './editorial/editorial.module';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorModule } from './author/author.module';
import { AuthorRoutingRoutes } from './author/author-routing.module';
import { EditorialRoutingRoutes } from './editorial/editorial-routing.module';
import { HttpErrorInterceptorService } from '../interceptors/HttpErrorInterceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    AppRoutingModule,
    BookModule,
    EditorialModule,
    AuthorModule,
    HttpClientModule,
    BookRoutingModule,
    EditorialRoutingRoutes,
    AuthorRoutingRoutes
  ],
  providers: [
    provideClientHydration(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
