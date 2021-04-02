import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pbook00002Page } from './pbook00002.page';

const routes: Routes = [
  {
    path: '',
    component: Pbook00002Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pbook00002PageRoutingModule {}
