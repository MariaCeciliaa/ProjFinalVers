import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DepilacaoPageRoutingModule } from './depilacao-routing.module';

import { DepilacaoPage } from './depilacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DepilacaoPageRoutingModule
  ],
  declarations: [DepilacaoPage]
})
export class DepilacaoPageModule {}
