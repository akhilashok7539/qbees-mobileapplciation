import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpateProfilePage } from './upate-profile.page';

const routes: Routes = [
  {
    path: '',
    component: UpateProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpateProfilePageRoutingModule {}
