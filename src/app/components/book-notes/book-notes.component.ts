import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { IBook } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-notes',
  templateUrl: './book-notes.component.html',
  styleUrls: ['./book-notes.component.scss'],
})
export class BookNotesComponent implements OnInit, OnChanges {

  constructor() { }

  @Input() book :IBook; 

  formatF : string = 'F'
  formatD : string = 'D'

  score = [1,2,3,4,5];
  name: string[] = ['star-outline']
  starInactive:string = 'star-outline';
  starActive:string = 'star';


  ngOnInit() {



  }
  
  
  ngOnChanges() {
    this.scoreRating()
  }

  
  scoreRating(){
    if (this.book?.score) {
      this.score.forEach((element, index) => {            //por cada elemento del score[]
        index < this.book?.score!                         // si el index que recorre es menor que la puntuacion del libro
          ? this.name[index] = this.starActive            //activa o desactiva las estrellas
          : this.name[index] = this.starInactive
      })
    }
  }



}
