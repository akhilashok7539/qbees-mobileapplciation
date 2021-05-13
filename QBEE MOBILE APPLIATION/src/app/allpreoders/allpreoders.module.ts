import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllpreodersPageRoutingModule } from './allpreoders-routing.module';

import { AllpreodersPage } from './allpreoders.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllpreodersPageRoutingModule
  ],
  declarations: [AllpreodersPage]
})
export class AllpreodersPageModule {}
