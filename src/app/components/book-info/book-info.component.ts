import { Component, Input, OnInit } from '@angular/core';
import { IBook } from '../../services/book.service';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.scss'],
})
export class BookInfoComponent implements OnInit {

  constructor() { }

  @Input() book :IBook; 

  
  ngOnInit() {}

}
