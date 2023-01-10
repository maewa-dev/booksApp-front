import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
