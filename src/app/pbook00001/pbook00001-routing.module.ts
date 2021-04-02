import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pbook00001Page } from './pbook00001.page';

const routes: Routes = [
  {
    path: '',
    component: Pbook00001Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pbook00001PageRoutingModule {}
