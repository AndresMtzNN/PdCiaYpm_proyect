import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'recommend-page',
    loadChildren: () => import('./recommend-page/recommend-page.module').then( m => m.RecommendPagePageModule)
  },
  {
    path: 'pbook00001',
    loadChildren: () => import('./pbook00001/pbook00001.module').then( m => m.Pbook00001PageModule)
  },
  {
    path: 'category-page',
    loadChildren: () => import('./category-page/category-page.module').then( m => m.CategoryPagePageModule)
  },
  {
    path: 'pbook00002',
    loadChildren: () => import('./pbook00002/pbook00002.module').then( m => m.Pbook00002PageModule)
  },
  {
    path: 'pbook00003',
    loadChildren: () => import('./pbook00003/pbook00003.module').then( m => m.Pbook00003PageModule)
  },
  {
    path: 'pbook00004',
    loadChildren: () => import('./pbook00004/pbook00004.module').then( m => m.Pbook00004PageModule)
  },
  {
    path: 'account-page',
    loadChildren: () => import('./account-page/account-page.module').then( m => m.AccountPagePageModule)
  },
  {
    path: 'catdrama-page',
    loadChildren: () => import('./catdrama-page/catdrama-page.module').then( m => m.CatdramaPagePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
