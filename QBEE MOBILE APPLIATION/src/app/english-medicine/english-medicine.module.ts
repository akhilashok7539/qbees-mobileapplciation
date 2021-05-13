import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnglishMedicinePageRoutingModule } from './english-medicine-routing.module';

import { EnglishMedicinePage } from './english-medicine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnglishMedicinePageRoutingModule
  ],
  declarations: [EnglishMedicinePage]
})
export class EnglishMedicinePageModule {}
