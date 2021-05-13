import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeneralshopDishesPageRoutingModule } from './generalshop-dishes-routing.module';

import { GeneralshopDishesPage } from './generalshop-dishes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeneralshopDishesPageRoutingModule
  ],
  declarations: [GeneralshopDishesPage]
})
export class GeneralshopDishesPageModule {}
