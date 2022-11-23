import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MassagemPageRoutingModule } from './massagem-routing.module';

import { MassagemPage } from './massagem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MassagemPageRoutingModule
  ],
  declarations: [MassagemPage]
})
export class MassagemPageModule {}
