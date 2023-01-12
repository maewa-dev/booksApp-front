import { Component, OnInit } from '@angular/core';
import { IBook, BookService } from '../../services/book.service';

@Component({
  selector: 'app-library-screen',
  templateUrl: './library-screen.page.html',
  styleUrls: ['./library-screen.page.scss'],
})
export class LibraryScreenPage implements OnInit {

  myLibrary : IBook[];

  constructor( private books : BookService ) { }

  ngOnInit() {
    //this.myLibrary = this.books.libraryFake;

    //recuperar los libros de firebase
    this.books.books$.subscribe(data => {
      this.myLibrary=data
    })
  }

}
