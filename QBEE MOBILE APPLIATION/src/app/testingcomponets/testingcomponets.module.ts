import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestingcomponetsPageRoutingModule } from './testingcomponets-routing.module';

import { TestingcomponetsPage } from './testingcomponets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestingcomponetsPageRoutingModule
  ],
  declarations: [TestingcomponetsPage]
})
export class TestingcomponetsPageModule {}
