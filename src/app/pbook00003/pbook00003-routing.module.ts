import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pbook00003Page } from './pbook00003.page';

const routes: Routes = [
  {
    path: '',
    component: Pbook00003Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pbook00003PageRoutingModule {}
