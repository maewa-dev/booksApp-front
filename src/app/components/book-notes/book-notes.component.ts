import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { kStringMaxLength } from 'buffer';
import { IBook } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-notes',
  templateUrl: './book-notes.component.html',
  styleUrls: ['./book-notes.component.scss'],
})
export class BookNotesComponent implements OnInit, OnChanges {
  
  @Input() book :IBook; 

  isEditing: boolean = false
  editBookForm: FormGroup

  scoresArray = [1,2,3,4,5];
  iconName: string[] = ['star-outline']
  starInactive:string = 'star-outline';
  starActive:string = 'star';

  constructor( private form: FormBuilder ) { }

 
/*   formatTypeDigital : string = 'D'
  formatTypePhysical : string = 'F'
  formatTypeBoth : string = 'A'
  formatTypeNull : string = ''; */

  get isPhysical ():boolean {
    return this.book?.format_type === 'F';
  }

  get isDigital ():boolean {
    return this.book?.format_type === 'D';
  }

  get isBoth ():boolean {
    return this.book?.format_type === 'A';
  }

  get isRead ():boolean {
    return this.book?.read === true;
  }

  ngOnInit() {
    this.editBookForm = this.form.group({
      format_type: [this.book?.format_type, Validators.required],
      read: [this.book?.read],
      start_date: [this.book?.start_date],
      end_date: [this.book?.end_date],
      score: [this.book?.score],
      notes: [this.book?.notes],
    })


    console.log('form', this.editBookForm)

  }
  
  
  ngOnChanges() {
    this.scoreRating()
  }

  
  scoreRating() {
    if (this.book?.score) {
      this.scoresArray.forEach((element, index) => {            //por cada elemento del score[]
        index < this.book?.score!                         // si el index que recorre es menor que la puntuacion del libro
          ? this.iconName[index] = this.starActive            //activa o desactiva las estrellas
          : this.iconName[index] = this.starInactive
      })
    }
  }



}
