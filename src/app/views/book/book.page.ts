import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBook } from 'src/app/services/book.service';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.page.html',
  styleUrls: ['./book.page.scss'],
})
export class BookPage implements OnInit {

  bookId:number
  library:IBook[];
  book:IBook|undefined;
  segment: string = 'info';

  constructor(
    private books : BookService,
    private route : ActivatedRoute
  ) {
    this.library = this.books.libraryFake;
    this.route.params.subscribe(param => {
      const {id} = param;
      this.bookId = Number(id);
    });
  }

  ngOnInit() {
    this.book = this.library.find(book => book.id === this.bookId)
  }

  segmentChanged(mode:any) {
    this.segment = mode.detail.value
  }

}
