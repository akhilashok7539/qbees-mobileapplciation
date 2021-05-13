import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeneralshopDishesPage } from './generalshop-dishes.page';

const routes: Routes = [
  {
    path: '',
    component: GeneralshopDishesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneralshopDishesPageRoutingModule {}
