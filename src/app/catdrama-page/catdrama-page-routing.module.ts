import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatdramaPagePage } from './catdrama-page.page';

const routes: Routes = [
  {
    path: '',
    component: CatdramaPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatdramaPagePageRoutingModule {}
