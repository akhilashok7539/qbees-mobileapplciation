import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddUserNewAddressPageRoutingModule } from './add-user-new-address-routing.module';

import { AddUserNewAddressPage } from './add-user-new-address.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddUserNewAddressPageRoutingModule
  ],
  declarations: [AddUserNewAddressPage]
})
export class AddUserNewAddressPageModule {}
