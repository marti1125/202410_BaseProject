/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';
import { BookDetailComponent } from './book-detail.component';
import { Editorial } from '../../editorial/editorial';
import { Author } from '../../author/author';
import { BookDetail } from '../bookdetail';

describe('BookDetailComponent', () => {
  let component: BookDetailComponent;
  let fixture: ComponentFixture<BookDetailComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [ BookDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailComponent);
    component = fixture.componentInstance;

    const editorial = new Editorial(
      faker.number.int(),
      faker.lorem.sentence()
    );

   const authors: Author[] = [];
   for (let i = 0; i < 3; i++) {
      const author = new Author (
        faker.number.int(),
        faker.lorem.sentence(),
        faker.number.int(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
      );
      authors.push(author);
    }

    const reviews = [];
    for (let i = 0; i < 3; i++) {
      const review = {
        id: faker.number.int(),
        source: faker.lorem.sentence(),
        name: faker.lorem.sentence(),
        description: faker.lorem.sentence()
      };
      reviews.push(review);
    }

    component.bookDetail= new BookDetail(
       faker.number.int(),
       faker.lorem.sentence(),
       faker.lorem.sentence(),
       faker.lorem.sentence(),
       faker.image.url(),
       faker.date.past(),
       editorial,
       authors,
       reviews,
     );

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should have a p.h3.p-3 element with bookDetail.name', () => {
    const element: HTMLElement = debug.query(By.css('p.h3.p-3')).nativeElement;
    expect(element.textContent).toContain(component.bookDetail.name);
  });
  
  it('should have an img element with src= bookDetail.image', () => {
   expect(debug.query(By.css('img')).attributes['src']).toEqual(
     component.bookDetail.image
   );
 });

 it('should have an img element with alt= bookDetail.name', () => {
   expect(debug.query(By.css('img')).attributes['alt']).toEqual(
     component.bookDetail.name
   );
 });

 it('should have 4 <dd> elements', () => {
    expect(debug.queryAll(By.css('dd.caption'))).toHaveSize(4)
  });

  it('should have one dd tag for component.bookDetail.isbn', () => {
   const allDt : DebugElement[] = debug.queryAll(By.css('dt'));
   const node = allDt.find((value) => {
     return value.nativeElement.textContent == 'ISBN';
   });
   expect(node?.nativeElement.nextSibling.textContent).toContain(component.bookDetail.isbn);
 });

 it('should have one dd tag for component.bookDetail.publishingDate', () => {
   const allDt : DebugElement[]= debug.queryAll(By.css('dt'));
   const node = allDt.find((value) => {
     return value.nativeElement.textContent == 'Publishing Date';
   });
   expect(node?.nativeElement.nextSibling.textContent).toContain(component.bookDetail.publishingDate);
 });

 it('should have one dd tag for component.bookDetail.editorial.name', () => {
   const allDt : DebugElement[]= debug.queryAll(By.css('dt'));
   const node = allDt.find((value) => {
     return value.nativeElement.textContent == 'Editorial';
   });
   expect(node?.nativeElement.nextSibling.textContent).toContain(component.bookDetail.editorial.name);
 });

 it('should have 3 <li> elements for component.bookDetail.reviews', () => {
   const reviewElements: DebugElement[] = debug.queryAll(By.css('ul li.caption'));
   expect(reviewElements).toHaveSize(3);
 });

 it('should have the correct review descriptions', () => {
   const reviewElements: DebugElement[] = debug.queryAll(By.css('ul li.caption'));
   reviewElements.forEach((element, index) => {
     expect(element.nativeElement.textContent).toContain(component.bookDetail.reviews[index].description);
   });
 });

});
