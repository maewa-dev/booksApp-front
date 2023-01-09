import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LibraryScreenPage } from './library-screen.page';

const routes: Routes = [
  {
    path: '',
    component: LibraryScreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LibraryScreenPageRoutingModule {}
