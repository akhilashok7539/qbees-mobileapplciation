import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopOthersPageRoutingModule } from './shop-others-routing.module';

import { ShopOthersPage } from './shop-others.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopOthersPageRoutingModule
  ],
  declarations: [ShopOthersPage]
})
export class ShopOthersPageModule {}
