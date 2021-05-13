import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopOthersPage } from './shop-others.page';

const routes: Routes = [
  {
    path: '',
    component: ShopOthersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopOthersPageRoutingModule {}
