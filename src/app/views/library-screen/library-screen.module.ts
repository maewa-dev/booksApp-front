import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LibraryScreenPageRoutingModule } from './library-screen-routing.module';

import { LibraryScreenPage } from './library-screen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LibraryScreenPageRoutingModule
  ],
  declarations: [LibraryScreenPage]
})
export class LibraryScreenPageModule {}
