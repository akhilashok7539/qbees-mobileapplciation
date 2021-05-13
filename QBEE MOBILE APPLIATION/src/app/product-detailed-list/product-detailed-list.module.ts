import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductDetailedListPageRoutingModule } from './product-detailed-list-routing.module';

import { ProductDetailedListPage } from './product-detailed-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductDetailedListPageRoutingModule
  ],
  declarations: [ProductDetailedListPage]
})
export class ProductDetailedListPageModule {}
