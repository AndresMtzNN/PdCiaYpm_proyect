import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pbook00002PageRoutingModule } from './pbook00002-routing.module';

import { Pbook00002Page } from './pbook00002.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pbook00002PageRoutingModule
  ],
  declarations: [Pbook00002Page]
})
export class Pbook00002PageModule {}
