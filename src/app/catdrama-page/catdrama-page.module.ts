import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatdramaPagePageRoutingModule } from './catdrama-page-routing.module';

import { CatdramaPagePage } from './catdrama-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatdramaPagePageRoutingModule
  ],
  declarations: [CatdramaPagePage]
})
export class CatdramaPagePageModule {}
