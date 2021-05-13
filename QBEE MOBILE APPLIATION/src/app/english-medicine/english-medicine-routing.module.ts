import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnglishMedicinePage } from './english-medicine.page';

const routes: Routes = [
  {
    path: '',
    component: EnglishMedicinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnglishMedicinePageRoutingModule {}
