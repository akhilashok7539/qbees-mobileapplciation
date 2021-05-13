import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PharmarcyPage } from './pharmarcy.page';

const routes: Routes = [
  {
    path: '',
    component: PharmarcyPage
  }

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PharmarcyPageRoutingModule {}
