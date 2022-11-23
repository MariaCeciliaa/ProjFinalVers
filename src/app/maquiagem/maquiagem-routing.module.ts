import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaquiagemPage } from './maquiagem.page';

const routes: Routes = [
  {
    path: '',
    component: MaquiagemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaquiagemPageRoutingModule {}
