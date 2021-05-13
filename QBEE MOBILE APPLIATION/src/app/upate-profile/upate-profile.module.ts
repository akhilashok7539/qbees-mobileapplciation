import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpateProfilePageRoutingModule } from './upate-profile-routing.module';

import { UpateProfilePage } from './upate-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpateProfilePageRoutingModule
  ],
  declarations: [UpateProfilePage]
})
export class UpateProfilePageModule {}
