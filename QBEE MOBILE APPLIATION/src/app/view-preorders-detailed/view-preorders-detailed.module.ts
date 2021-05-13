import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewPreordersDetailedPageRoutingModule } from './view-preorders-detailed-routing.module';

import { ViewPreordersDetailedPage } from './view-preorders-detailed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewPreordersDetailedPageRoutingModule
  ],
  declarations: [ViewPreordersDetailedPage]
})
export class ViewPreordersDetailedPageModule {}
