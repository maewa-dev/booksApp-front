import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExploreScreenPageRoutingModule } from './explore-screen-routing.module';

import { ExploreScreenPage } from './explore-screen.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreScreenPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ExploreScreenPage]
})
export class ExploreScreenPageModule {}
