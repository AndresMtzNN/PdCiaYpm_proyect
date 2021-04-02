import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pbook00004PageRoutingModule } from './pbook00004-routing.module';

import { Pbook00004Page } from './pbook00004.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pbook00004PageRoutingModule
  ],
  declarations: [Pbook00004Page]
})
export class Pbook00004PageModule {}
