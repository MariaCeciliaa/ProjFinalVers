import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CabeloPageRoutingModule } from './cabelo-routing.module';

import { CabeloPage } from './cabelo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CabeloPageRoutingModule
  ],
  declarations: [CabeloPage]
})
export class CabeloPageModule {}
