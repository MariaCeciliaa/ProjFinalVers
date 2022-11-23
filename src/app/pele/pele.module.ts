import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PelePageRoutingModule } from './pele-routing.module';

import { PelePage } from './pele.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PelePageRoutingModule
  ],
  declarations: [PelePage]
})
export class PelePageModule {}
