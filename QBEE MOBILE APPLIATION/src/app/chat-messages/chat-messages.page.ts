import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-chat-messages',
  templateUrl: './chat-messages.page.html',
  styleUrls: ['./chat-messages.page.scss'],
})
export class ChatMessagesPage implements OnInit {
  locationid;
  mesagesarray:any = [];

  constructor(private userservice:UserService) { }

  ngOnInit() {

  }
  ionViewWillEnter() {
    this.getmessagebylocation();
  }
  getmessagebylocation()
  {
      this.locationid = JSON.parse(localStorage.getItem("currentUserDetails"));
      
    this.userservice.getallmessage(this.locationid['location']).subscribe(
      data =>{
        console.log(data)
        this.mesagesarray = data['data'];
      },
      error =>{

      }
    )
  }


}
