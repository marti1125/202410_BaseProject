/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthorService } from './author.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: Author', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [AuthorService]
    });
  });

  it('should ...', inject([AuthorService], (service: AuthorService) => {
    expect(service).toBeTruthy();
  }));
});
