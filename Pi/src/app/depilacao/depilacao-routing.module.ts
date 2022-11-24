import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DepilacaoPage } from './depilacao.page';

const routes: Routes = [
  {
    path: '',
    component: DepilacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepilacaoPageRoutingModule {}
