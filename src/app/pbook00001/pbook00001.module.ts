import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pbook00001PageRoutingModule } from './pbook00001-routing.module';

import { Pbook00001Page } from './pbook00001.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pbook00001PageRoutingModule
  ],
  declarations: [Pbook00001Page]
})
export class Pbook00001PageModule {}
