import { Injectable } from '@angular/core';

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
  
  constructor() {}

  get library():IBook[] {
    return this._myLibrary;
  }





}
