import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatMessagesPage } from './chat-messages.page';

const routes: Routes = [
  {
    path: '',
    component: ChatMessagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatMessagesPageRoutingModule {}
