import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { BookCardComponent } from './book-card/book-card.component';
import { BookItemComponent } from './book-item/book-item.component';
import { RouterModule } from '@angular/router';
import { BookInfoComponent } from './book-info/book-info.component';



@NgModule({
  declarations: [
    BookCardComponent,
    BookItemComponent,
    BookInfoComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
    ],
  exports: [
    BookCardComponent,
    BookItemComponent,
    BookInfoComponent
  ]
})
export class ComponentsModule { }
