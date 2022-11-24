import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnhaPage } from './unha.page';

const routes: Routes = [
  {
    path: '',
    component: UnhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnhaPageRoutingModule {}
