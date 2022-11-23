import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnhaPageRoutingModule } from './unha-routing.module';

import { UnhaPage } from './unha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnhaPageRoutingModule
  ],
  declarations: [UnhaPage]
})
export class UnhaPageModule {}
