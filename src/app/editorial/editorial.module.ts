import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorialListComponent } from './editorial-list/editorial-list.component';
import { RouterModule } from '@angular/router';
import { EditorialRoutingRoutes } from './editorial-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    EditorialRoutingRoutes
  ],
  declarations: [EditorialListComponent]
})
export class EditorialModule { }
