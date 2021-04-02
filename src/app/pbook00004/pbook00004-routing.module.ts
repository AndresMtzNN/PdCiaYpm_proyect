import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pbook00004Page } from './pbook00004.page';

const routes: Routes = [
  {
    path: '',
    component: Pbook00004Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pbook00004PageRoutingModule {}
