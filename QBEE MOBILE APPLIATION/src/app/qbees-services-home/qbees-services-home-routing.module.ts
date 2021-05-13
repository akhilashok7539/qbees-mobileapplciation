import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QbeesServicesHomePage } from './qbees-services-home.page';

const routes: Routes = [
  {
    path: '',
    component: QbeesServicesHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QbeesServicesHomePageRoutingModule {}
