import { Component, OnInit } from '@angular/core';
import { EditorialService } from '../editorial.service';
import { EditorialDetail } from '../editorial-detail';
@Component({
  selector: 'app-editorial-list',
  templateUrl: './editorial-list.component.html',
  styleUrls: ['./editorial-list.component.css']
})
export class EditorialListComponent implements OnInit {

  editorials: Array<EditorialDetail> = [];

  constructor(private editorialService: EditorialService) { }
  
  getEditorials() {
    this.editorialService.getEditorials().subscribe((data: EditorialDetail[]) => {
      this.editorials = data;
    });
  }

  ngOnInit() {
    this.getEditorials();
  }

}
