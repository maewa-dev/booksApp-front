import { Component, OnInit } from '@angular/core';
import { BookService, IBook } from 'src/app/services/book.service';

@Component({
  selector: 'app-explore-screen',
  templateUrl: './explore-screen.page.html',
  styleUrls: ['./explore-screen.page.scss'],
})
export class ExploreScreenPage implements OnInit {


  myLibrary : IBook[];

  constructor( private books : BookService ) { }

  ngOnInit() {
    this.myLibrary = this.books.library;
    //console.log ('you are here' , this.myLibrary)
  }

}
