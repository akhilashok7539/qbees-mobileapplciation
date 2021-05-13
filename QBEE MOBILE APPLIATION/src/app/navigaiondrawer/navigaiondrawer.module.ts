import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NavigaiondrawerPageRoutingModule } from './navigaiondrawer-routing.module';

import { NavigaiondrawerPage } from './navigaiondrawer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NavigaiondrawerPageRoutingModule
  ],
  declarations: [NavigaiondrawerPage]
})
export class NavigaiondrawerPageModule {}
