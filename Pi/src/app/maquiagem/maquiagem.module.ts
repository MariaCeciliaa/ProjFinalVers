import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaquiagemPageRoutingModule } from './maquiagem-routing.module';

import { MaquiagemPage } from './maquiagem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaquiagemPageRoutingModule
  ],
  declarations: [MaquiagemPage]
})
export class MaquiagemPageModule {}
