import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QbeesServicesHomePageRoutingModule } from './qbees-services-home-routing.module';

import { QbeesServicesHomePage } from './qbees-services-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QbeesServicesHomePageRoutingModule
  ],
  declarations: [QbeesServicesHomePage]
})
export class QbeesServicesHomePageModule {}
