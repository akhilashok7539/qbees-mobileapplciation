import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListtopdealsPageRoutingModule } from './listtopdeals-routing.module';

import { ListtopdealsPage } from './listtopdeals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListtopdealsPageRoutingModule
  ],
  declarations: [ListtopdealsPage]
})
export class ListtopdealsPageModule {}
