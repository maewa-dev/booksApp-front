import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AddBookFormComponent } from './components/add-book-form/add-book-form.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./views/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'library-screen',
    loadChildren: () =>
      import('./views/library-screen/library-screen.module').then(
        (m) => m.LibraryScreenPageModule
      ),
  },
  {
    path: 'explore-screen',
    loadChildren: () => import('./views/explore-screen/explore-screen.module').then( m => m.ExploreScreenPageModule)
  },
  {
    path: 'book/:id',
    loadChildren: () => import('./views/book/book.module').then( m => m.BookPageModule)
  },
  { path: 'add-book', 
  component: AddBookFormComponent 
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
