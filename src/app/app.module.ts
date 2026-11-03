import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BookModule } from './book/book.module';
import { BookRoutingModule } from './book/book-routing.module';
import { EditorialModule } from './editorial/editorial.module';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorModule } from './author/author.module';
import { AuthorRoutingRoutes } from './author/author-routing.module';
import { EditorialRoutingRoutes } from './editorial/editorial-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
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
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
