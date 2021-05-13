import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductDetailedListPage } from './product-detailed-list.page';

const routes: Routes = [
  {
    path: '',
    component: ProductDetailedListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductDetailedListPageRoutingModule {}
