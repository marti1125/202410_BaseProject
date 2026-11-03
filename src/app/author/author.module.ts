import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { RouterModule } from '@angular/router';
import { AuthorRoutingRoutes } from './author-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AuthorRoutingRoutes
  ],
  declarations: [AuthorListComponent, AuthorDetailComponent]
})
export class AuthorModule { }
