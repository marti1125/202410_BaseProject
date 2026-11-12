import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { AuthorCreateComponent } from './author-create/author-create.component';
import { RouterModule } from '@angular/router';
import { AuthorRoutingRoutes } from './author-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AuthorRoutingRoutes,
    ReactiveFormsModule
  ],
  declarations: [AuthorListComponent, AuthorDetailComponent, AuthorCreateComponent]
})
export class AuthorModule { }
