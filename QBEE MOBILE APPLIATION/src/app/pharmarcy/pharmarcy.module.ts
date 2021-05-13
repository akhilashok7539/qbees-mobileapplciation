import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PharmarcyPageRoutingModule } from './pharmarcy-routing.module';

import { PharmarcyPage } from './pharmarcy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PharmarcyPageRoutingModule
  ],
  declarations: [PharmarcyPage]
})
export class PharmarcyPageModule {}
