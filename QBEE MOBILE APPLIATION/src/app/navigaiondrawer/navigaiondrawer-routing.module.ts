import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavigaiondrawerPage } from './navigaiondrawer.page';

const routes: Routes = [
  {
    path: '',
    component: NavigaiondrawerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavigaiondrawerPageRoutingModule {}
