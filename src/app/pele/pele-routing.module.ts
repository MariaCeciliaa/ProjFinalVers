import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PelePage } from './pele.page';

const routes: Routes = [
  {
    path: '',
    component: PelePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PelePageRoutingModule {}
