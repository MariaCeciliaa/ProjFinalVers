import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MassagemPage } from './massagem.page';

const routes: Routes = [
  {
    path: '',
    component: MassagemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MassagemPageRoutingModule {}
