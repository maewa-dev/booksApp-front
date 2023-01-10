import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { BookCardComponent } from './book-card/book-card.component';
import { BookItemComponent } from './book-item/book-item.component';



@NgModule({
  declarations: [
    BookCardComponent,
    BookItemComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    BookCardComponent,
    BookItemComponent
  ]
})
export class ComponentsModule { }
