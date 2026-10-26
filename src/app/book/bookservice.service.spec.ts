/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BookserviceService } from './bookservice.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: Bookservice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BookserviceService]
    });
  });

  it('should ...', inject([BookserviceService], (service: BookserviceService) => {
    expect(service).toBeTruthy();
  }));
});
