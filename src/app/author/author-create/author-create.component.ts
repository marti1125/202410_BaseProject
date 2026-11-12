import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Author } from '../author';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-author-create',
  templateUrl: './author-create.component.html',
  styleUrls: ['./author-create.component.css']
})
export class AuthorCreateComponent implements OnInit {

  authorForm!: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private toastr: ToastrService,
    private authorService: AuthorService
  ) { }

  ngOnInit() {
    this.authorForm = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      image: ["", [Validators.required, Validators.maxLength(255)]],
      birthDate: ["", [Validators.required]],
      description: ["", [Validators.required, Validators.maxLength(100)]]
    });
  }

  createAuthor(author: Author) {
    this.authorService.createAuthor(author).subscribe({
      next: (createdAuthor) => {
        this.toastr.success("Author created successfully", "Confirmation");
        this.authorForm.reset();
      },
      error: (err) => {
        this.toastr.error("Failed to create author", "Error");
        console.error(err);
      }
    });
  }

  cancelCreation() {
    this.authorForm.reset();
  }

}
