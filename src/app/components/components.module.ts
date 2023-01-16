import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { BookCardComponent } from './book-card/book-card.component';
import { BookItemComponent } from './book-item/book-item.component';
import { RouterModule } from '@angular/router';
import { BookInfoComponent } from './book-info/book-info.component';
import { AddBookFormComponent } from './add-book-form/add-book-form.component';



@NgModule({
  declarations: [
    BookCardComponent,
    BookItemComponent,
    BookInfoComponent,
    AddBookFormComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
    ],
  exports: [
    BookCardComponent,
    BookItemComponent,
    BookInfoComponent,
    AddBookFormComponent
  ]
})
export class ComponentsModule { }
