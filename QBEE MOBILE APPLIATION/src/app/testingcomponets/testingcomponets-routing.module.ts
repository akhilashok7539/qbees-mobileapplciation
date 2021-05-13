import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestingcomponetsPage } from './testingcomponets.page';

const routes: Routes = [
  {
    path: '',
    component: TestingcomponetsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestingcomponetsPageRoutingModule {}
