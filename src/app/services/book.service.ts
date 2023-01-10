import { Injectable } from '@angular/core';

export interface IBook{
  id: number,
  title: string, 
  author: string,
  isbn: string,
  publish_date?: string,
  format_type: string, //D - F
  cover: any //(img)
  start_date?: string,
  end_date?: string,
  saga?: string, // harry potter
  volume?: number, //1
  score?: number, //1 - 5
  notes?: string,
};

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private _myLibrary: IBook[] = [
    {
      id: 1,
      title: "El principito", 
      author: "Antoine Saint-Exupery",
      isbn: "9783140464079",
      format_type: "F", //D - F
      cover: "https://m.media-amazon.com/images/I/71lyHAf7XXL.jpg" //(img)
    },
    {
      id: 2,
      title: "El hijo del traidor", 
      author: "Pedro Urvi",
      isbn: "9781692101619",
      format_type: "D", //D - F
      cover: "https://m.media-amazon.com/images/I/51VtRLuOQjL.jpg" //(img)
    },
    {
      id: 3,
      title: "Trono de Cristal", 
      author: "Sarah J. Maas",
      isbn: "9783423716536",
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
      format_type: "F", //D - F
      cover: "https://m.media-amazon.com/images/I/61GY5CmupoL.jpg", //(img),
      saga: "Trono de cristal",
      volume: 1
    }
    ,
    {
      id: 6,
      title: "Trono de Cristal", 
      author: "Sarah J. Maas",
      isbn: "9783423716536",
      format_type: "F", //D - F
      cover: "https://m.media-amazon.com/images/I/61GY5CmupoL.jpg", //(img),
      saga: "Trono de cristal",
      volume: 1
    }
    ,
    {
      id: 7,
      title: "Trono de Cristal", 
      author: "Sarah J. Maas",
      isbn: "9783423716536",
      format_type: "F", //D - F
      cover: "https://m.media-amazon.com/images/I/61GY5CmupoL.jpg", //(img),
      saga: "Trono de cristal",
      volume: 1
    }
    ,
    {
      id: 8,
      title: "Trono de Cristal", 
      author: "Sarah J. Maas",
      isbn: "9783423716536",
      format_type: "F", //D - F
      cover: "https://m.media-amazon.com/images/I/61GY5CmupoL.jpg", //(img),
      saga: "Trono de cristal",
      volume: 1
    }
    ,
    {
      id: 9,
      title: "Trono de Cristal", 
      author: "Sarah J. Maas",
      isbn: "9783423716536",
      format_type: "F", //D - F
      cover: "https://m.media-amazon.com/images/I/61GY5CmupoL.jpg", //(img),
      saga: "Trono de cristal",
      volume: 1
    }
    ,
    {
      id: 10,
      title: "Trono de Cristal", 
      author: "Sarah J. Maas",
      isbn: "9783423716536",
      format_type: "F", //D - F
      cover: "https://m.media-amazon.com/images/I/61GY5CmupoL.jpg", //(img),
      saga: "Trono de cristal",
      volume: 1
    }
    ,
    {
      id: 11,
      title: "Trono de Cristal", 
      author: "Sarah J. Maas",
      isbn: "9783423716536",
      format_type: "F", //D - F
      cover: "https://m.media-amazon.com/images/I/61GY5CmupoL.jpg", //(img),
      saga: "Trono de cristal",
      volume: 1
    }
    ,
    {
      id: 12,
      title: "Trono de Cristal", 
      author: "Sarah J. Maas",
      isbn: "9783423716536",
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
