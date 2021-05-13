import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '../_services/alert.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-allpreoders',
  templateUrl: './allpreoders.page.html',
  styleUrls: ['./allpreoders.page.scss'],
})
export class AllpreodersPage implements OnInit {
  userdetails:any;
  orderlist:any=[];
  constructor(private router:Router,private usrsercie:UserService,private alertervies:AlertService) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.userdetails = JSON.parse(localStorage.getItem("qboylogin"));
    this.getallorder();
  }
  getallorder(){
   
    this.usrsercie.getPreorder(this.userdetails['userid']).subscribe(
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
  viewItems(s){
    sessionStorage.setItem("prdorderitems",JSON.stringify(s));
    // this.alert.exitappplication();
    this.router.navigate(['/view-preorders-detailed'])

  }
}
