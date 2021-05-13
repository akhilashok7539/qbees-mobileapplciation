import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.page.html',
  styleUrls: ['./my-orders.page.scss'],
})
export class MyOrdersPage implements OnInit {
  userdetails:any;
  orderlist:any=[];
  constructor(private router:Router,private usrsercie:UserService) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.userdetails = JSON.parse(localStorage.getItem("qboylogin"));
    this.getallorder();
  }
  getallorder(){
   
    this.usrsercie.getallorder(this.userdetails['userid']).subscribe(
      data =>{
        console.log(data);
        this.orderlist = data['data'];
        
      },
      error =>{

      }
    )
  }

  back(){
    this.router.navigate(['/folder/Inbox'])
  }

}
