import { Injectable } from '@angular/core';
import { initializeApp } from '@firebase/app';
import { environment } from '../../environments/environment';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

export interface IBook{
  id: number,
  title: string, 
  author: string,
  isbn: string,
  num_page?: number,
  editorial?: string,
  barcode: string,
  publish_date?: string,
  format_type: string, //D - F
  cover: any //(img)
  start_date?: string,
  end_date?: string,
  saga?: string, // harry potter
  volume?: number, //1
  score?: number, //1 - 5
  notes?: string,
  read?: boolean,
  synopsis?: string
};

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books$ : Observable<any[]>;

  constructor( private firestore: AngularFirestore ) {
    //todo_mrt avisa cada vez que se cambie algo de la bbdd
    this.books$ = firestore.collection('books').valueChanges();
    
    this.books$.subscribe(data => {
      console.log('explota?', data)
    });    

    //agregar los 3 primeros libros a firebase
    //seborra()
  }

 /*  todosloslibros:IBook[];
  seBorra() {
    this.todosloslibros = this.libraryFake;
    for(let i =0; i<3; i++){
      this.firestore.collection('books').doc(this.todosloslibros[i].isbn).set(this.todosloslibros[i]);
    }
  } */

  //agregar a la coleccion libros con el isbn
  //this.firestore.collection('books').doc(this.todosloslibros[i].isbn).set(this.todosloslibros[i]);

  

  //fake 
  private _myLibrary: IBook[] = [
    {
      id: 1,
      //title: "El principito", 
      title: "Cuatro corazones con Freno y marcha atrás", 
//      author: "Antoine Saint-Exupery",
      author: "Federico García Lorca, necesito un nombre mas largo",
      isbn: "9783140464079",
      barcode:"123",
      publish_date: "1943-04-06",
      format_type: 'F',
      cover: "https://m.media-amazon.com/images/I/71lyHAf7XXL.jpg", //(img)
      start_date: "2019-01-01",
      end_date: "2019-01-05",
      score: 5, //1 - 5
      notes: "gran libro",
      saga:"2asd",
      volume: 2,
      synopsis: "habia una vez un barquito chiquitito habia una vez lalala"
    },
    {
      id: 2,
      title: "El hijo del traidor", 
      author: "Pedro Urvi",
      isbn: "9781692101619",
      barcode:"123",
      format_type: "D", //D - F
      cover: "https://m.media-amazon.com/images/I/51VtRLuOQjL.jpg" //(img)
    },
    {
      id: 3,
      title: "Trono de Cristal", 
      author: "Sarah J. Maas",
      isbn: "9783423716536",
      barcode:"123",
      format_type: "F", //D - F
      cover: "https://m.media-amazon.com/images/I/61GY5CmupoL.jpg", //(img),
      saga: "Trono de cristal",
      volume: 1
    },
    {
      id: 4,
      //title: "El principito", 
      title: "asd", 
//      author: "Antoine Saint-Exupery",
      author: "Necesito un nombre mas largo",
      isbn: "9783140464080",
      barcode:"123",
      publish_date: "1943-04-06",
      format_type: 'F',
      cover: "https://m.media-amazon.com/images/I/71lyHAf7XXL.jpg", //(img)
      start_date: "2019-01-01",
      end_date: "2019-01-05",
      score: 5, //1 - 5
      notes: "gran libro",
      saga:"2asd",
      volume: 2,
      synopsis: "habia una vez un barquito chiquitito habia una vez lalala"
    },
    {
      id: 4,
      title: "Trono de Cristal", 
      author: "Sarah J. Maas",
      isbn: "9783423716536",
      barcode:"123",
      format_type: "F", //D - F
      cover: "https://m.media-amazon.com/images/I/61GY5CmupoL.jpg", //(img),
      saga: "Trono de cristal",
      volume: 1
    },
    {
      id: 5,
      title: "Trono de Cristal", 
      author: "Sarah J. Maas",
      isbn: "9783423716536",
      barcode:"123",
      format_type: "F", //D - F
      cover: "https://m.media-amazon.com/images/I/61GY5CmupoL.jpg", //(img),
      saga: "Trono de cristal",
      volume: 1
    },
    {
      id: 6,
      title: "Trono de Cristal", 
      author: "Sarah J. Maas",
      isbn: "9783423716536",
      barcode:"123",
      format_type: "F", //D - F
      cover: "https://m.media-amazon.com/images/I/61GY5CmupoL.jpg", //(img),
      saga: "Trono de cristal",
      volume: 1
    },
    {
      id: 7,
      title: "Trono de Cristal", 
      author: "Sarah J. Maas",
      isbn: "9783423716536",
      barcode:"123",
      format_type: "F", //D - F
      cover: "https://m.media-amazon.com/images/I/61GY5CmupoL.jpg", //(img),
      saga: "Trono de cristal",
      volume: 1
    },
    {
      id: 8,
      title: "Trono de Cristal", 
      author: "Sarah J. Maas",
      isbn: "9783423716536",
      barcode:"123",
      format_type: "F", //D - F
      cover: "https://m.media-amazon.com/images/I/61GY5CmupoL.jpg", //(img),
      saga: "Trono de cristal",
      volume: 1
    },
    {
      id: 9,
      title: "Trono de Cristal", 
      author: "Sarah J. Maas",
      isbn: "9783423716536",
      barcode:"123",
      format_type: "F", //D - F
      cover: "https://m.media-amazon.com/images/I/61GY5CmupoL.jpg", //(img),
      saga: "Trono de cristal",
      volume: 1
    },
    {
      id: 10,
      title: "Trono de Cristal", 
      author: "Sarah J. Maas",
      isbn: "9783423716536",
      barcode:"123",
      format_type: "F", //D - F
      cover: "https://m.media-amazon.com/images/I/61GY5CmupoL.jpg", //(img),
      saga: "Trono de cristal",
      volume: 1
    },
    {
      id: 11,
      title: "Trono de Cristal", 
      author: "Sarah J. Maas",
      isbn: "9783423716536",
      barcode:"123",
      format_type: "F", //D - F
      cover: "https://m.media-amazon.com/images/I/61GY5CmupoL.jpg", //(img),
      saga: "Trono de cristal",
      volume: 1
    },
    {
      id: 12,
      title: "Trono de Cristal", 
      author: "Sarah J. Maas",
      isbn: "9783423716536",
      barcode:"123",
      format_type: "F", //D - F
      cover: "https://m.media-amazon.com/images/I/61GY5CmupoL.jpg", //(img),
      saga: "Trono de cristal",
      volume: 1
    }
  ];

  
  get libraryFake():IBook[] {
    return this._myLibrary;
  }





}
