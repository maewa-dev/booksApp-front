import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExploreScreenPage } from './explore-screen.page';

const routes: Routes = [
  {
    path: '',
    component: ExploreScreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExploreScreenPageRoutingModule {}
