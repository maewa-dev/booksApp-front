import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IBook } from 'src/app/services/book.service';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.page.html',
  styleUrls: ['./book.page.scss'],
})
export class BookPage implements OnInit, OnDestroy {

  bookId:number
  library:IBook[];
  librarySuscription:Subscription;
  book:IBook|undefined;
  bookSuscription: Subscription;
  segment: string = 'info';

  constructor(
    private books : BookService,
    private route : ActivatedRoute
  ) {
    this.librarySuscription = this.books.books$.subscribe(books => {
      this.library = books;
    });

    this.bookSuscription = this.books.queryObservable$.subscribe(book => {
      this.book = book[0];
    });

    this.route.params.subscribe(param => {
      const {id} = param;
      this.bookId = Number(id);
    });
  }

  ngOnInit() {
    this.books.getBookById(this.bookId)
  }

  segmentChanged(mode:any) {
    this.segment = mode.detail.value
  }

  ngOnDestroy() {
    this.librarySuscription.unsubscribe()
    this.bookSuscription.unsubscribe()
  }
}
