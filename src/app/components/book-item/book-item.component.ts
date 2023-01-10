import { Component, Input, OnInit } from '@angular/core';
import { IBook } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss'],
})
export class BookItemComponent implements OnInit {

  constructor() { }

  @Input() book : IBook;
  
  ngOnInit() {}

}
