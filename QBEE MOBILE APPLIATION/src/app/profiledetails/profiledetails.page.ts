import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FCM } from '@ionic-native/fcm/ngx';
import { MenuController, Platform, ToastController } from '@ionic/angular';
import { ToasterService } from '../_services/toaster.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-profiledetails',
  templateUrl: './profiledetails.page.html',
  styleUrls: ['./profiledetails.page.scss'],
})
export class ProfiledetailsPage implements OnInit {
  userDetails;
  results :any= [];
  sublocations:any= [];
  name;
  userName;
  address;
  location = '';
  cartlist: any;
  cartlength: any;
  backbutton;
  islogin;
  slocation;
  fcmtoken
  constructor(private userservice:UserService,private fcm: FCM,private platform:Platform,private menu:MenuController,
    private toaster:ToastController,private router:Router,private toasters:ToasterService) { }

  ngOnInit() {
    this.getallplaces();

  }
  ionViewDidLeave() {
    this.menu.enable(true);
 } 
  ionViewWillEnter() {
    this.menu.enable(false);

    this.userDetails = JSON.parse(localStorage.getItem('currentUserDetails'));
    this.islogin= JSON.parse(localStorage.getItem("isloggedin"));

    if(this.userDetails != null)
    {
      this.name = this.userDetails['name'];
      this.userName = this.userDetails['email'];
      this.address = this.userDetails['address'];
      this.location = this.userDetails['location']._id;
      this.fcmtoken = JSON.parse(localStorage.getItem("firbaseToken"));

    }
    this.firbasetoken();
    this.getallplaces();
    this.getcartitems();
    this.backbutton = this.platform.backButton.subscribe(
      async () => {
        if (this.islogin == true) {
          console.log('Enter')
          this.router.navigate(['homescreen']);
        }
        else{
          this.router.navigate(['profiledetails']);
        }
      }
    )

  }

  firbasetoken()
  {
    this.fcm.getToken().then(token => {
      console.log(token);
      this.fcmtoken = token;
      localStorage.setItem("firbaseToken",token);
    });

    // ionic push notification example
    this.fcm.onNotification().subscribe(data => {
      console.log(data);
    
      if (data) {
        console.log('Received in background');
      } else {
        console.log('Received in foreground');
      }

    }); 
  }
  
  getallplaces(){
    this.userservice.getallplaces().subscribe(
      data=>{
        console.log(data);
        this.results = data['data'];
        
      },
      error =>{

      }
    )
  }
  save(){
    console.log(this.location);
    if(this.location == null || this.location == undefined)
    {

    }
    else
    {

    let req ={
     
      name:this.name,
      email:this.userName,
      address:this.address,
      location:this.location,
      tocken_id:this.fcmtoken,
      sublocation:this.slocation,


    }
    let uid = JSON.parse(localStorage.getItem("qboylogin"));
    this.userservice.saveProfile(req,uid['userid']).subscribe(
      data =>{
        this.router.navigate(['homescreen']);
        localStorage.setItem("isloggedin",JSON.stringify(true));
        localStorage.setItem("currentUserDetails",JSON.stringify(req));
        this.toasters.profileupdate();
      },
      error =>{
        this.toasters.errorupdateprofile();

      }
    )
  }

  }
    
  getcartitems() {
    let req = {
      "user_id":this.userDetails['userid'],
    }
    this.userservice.getcartitems(req).subscribe(
      data => {
        console.log((data));
        this.cartlist = data['data'];
      
        this.cartlength = this.cartlist.length;

   
       
      },
      error => {
      }
    )
  }
  onChange($event){
    console.log($event.target.value);
    let id= $event.target.value;
    this.userservice.getsublocations(id).subscribe(
      data =>{
        this.sublocations = data;
      },
      error=>{

      }
    )
    }
}
