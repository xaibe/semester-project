import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbputPage } from './abput.page';

const routes: Routes = [
  {
    path: '',
    component: AbputPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbputPageRoutingModule {}
