import { Component, Input, OnInit } from '@angular/core';
import { IBook } from '../../services/book.service';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent implements OnInit {

  constructor() { }

  @Input() book : IBook;

  ngOnInit() {}

}
