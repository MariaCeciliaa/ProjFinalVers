import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CabeloPage } from './cabelo.page';

const routes: Routes = [
  {
    path: '',
    component: CabeloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CabeloPageRoutingModule {}
