import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuyrvedicMedicinePageRoutingModule } from './auyrvedic-medicine-routing.module';

import { AuyrvedicMedicinePage } from './auyrvedic-medicine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuyrvedicMedicinePageRoutingModule
  ],
  declarations: [AuyrvedicMedicinePage]
})
export class AuyrvedicMedicinePageModule {}
