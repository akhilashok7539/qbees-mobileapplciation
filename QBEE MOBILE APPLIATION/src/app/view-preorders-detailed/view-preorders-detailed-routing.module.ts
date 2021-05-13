import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewPreordersDetailedPage } from './view-preorders-detailed.page';

const routes: Routes = [
  {
    path: '',
    component: ViewPreordersDetailedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewPreordersDetailedPageRoutingModule {}
