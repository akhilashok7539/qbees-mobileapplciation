import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatMessagesPageRoutingModule } from './chat-messages-routing.module';

import { ChatMessagesPage } from './chat-messages.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatMessagesPageRoutingModule
  ],
  declarations: [ChatMessagesPage]
})
export class ChatMessagesPageModule {}
