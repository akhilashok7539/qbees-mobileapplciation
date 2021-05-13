import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListtopdealsPage } from './listtopdeals.page';

const routes: Routes = [
  {
    path: '',
    component: ListtopdealsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListtopdealsPageRoutingModule {}
