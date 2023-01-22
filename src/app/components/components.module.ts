import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { BookCardComponent } from './book-card/book-card.component';
import { BookItemComponent } from './book-item/book-item.component';
import { RouterModule } from '@angular/router';
import { BookInfoComponent } from './book-info/book-info.component';
import { AddBookFormComponent } from './add-book-form/add-book-form.component';
import { LoadingListComponent } from './loading-list/loading-list.component';
import { BookNotesComponent } from './book-notes/book-notes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BookCardComponent,
    BookItemComponent,
    BookInfoComponent,
    AddBookFormComponent,
    LoadingListComponent,
    BookNotesComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
    ],
  exports: [
    BookCardComponent,
    BookItemComponent,
    BookInfoComponent,
    AddBookFormComponent,
    LoadingListComponent,
    BookNotesComponent
  ]
})
export class ComponentsModule { }
