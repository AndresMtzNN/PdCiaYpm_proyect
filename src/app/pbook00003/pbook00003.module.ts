import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pbook00003PageRoutingModule } from './pbook00003-routing.module';

import { Pbook00003Page } from './pbook00003.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pbook00003PageRoutingModule
  ],
  declarations: [Pbook00003Page]
})
export class Pbook00003PageModule {}
