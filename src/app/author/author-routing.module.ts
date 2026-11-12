import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { AuthorCreateComponent } from './author-create/author-create.component';

const routes: Routes = [
  {
    path: 'create',
    component: AuthorCreateComponent
  },
  {
    path: 'list',
    component: AuthorListComponent
  },
  {
    path: ':id',
    component: AuthorDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorRoutingRoutes { }
