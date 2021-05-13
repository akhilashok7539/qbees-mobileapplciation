import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllpreodersPage } from './allpreoders.page';

const routes: Routes = [
  {
    path: '',
    component: AllpreodersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllpreodersPageRoutingModule {}
