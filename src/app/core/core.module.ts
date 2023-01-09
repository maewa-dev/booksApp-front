import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [MenuComponent,
    HeaderComponent],
  imports: [CommonModule,
    IonicModule,
    RouterLink],
  exports: [MenuComponent,
    HeaderComponent],
})
export class CoreModule {}
