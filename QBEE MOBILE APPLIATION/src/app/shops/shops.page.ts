import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from '../_services/loader.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.page.html',
  styleUrls: ['./shops.page.scss'],
})
export class ShopsPage implements OnInit {
  shopdetails;
  userdetails;
  sName;
  shops: any = [];
  cId: any;
  locationPin: any;
  currenttime;
  msg;
  cartlist: any;
  cartlength: any;
  category:any = [];
  constructor(private router: Router, private userservice: UserService,private loader:LoaderService) { }

  ngOnInit() {

  }
  view(s) {
    this.category = JSON.parse(sessionStorage.getItem("shopname"));
    sessionStorage.setItem("shop", JSON.stringify(s))
    if(this.category['category_menutype']=='1')
    {
      this.router.navigate(['productlist']);

    }
    else
    {
      this.router.navigate(['generalshop-dishes'])
    }
  }
  ionViewWillEnter() {

    this.shopdetails = JSON.parse(sessionStorage.getItem('shopname'));
    this.userdetails = JSON.parse(localStorage.getItem("currentUserDetails"));

    this.sName = this.shopdetails['category_name'];
    this.cId = this.shopdetails['_id'];
    this.locationPin = this.userdetails['location'];
    this.getallshopsbycatergory();
    this.getcartitems();
  }
  getallshopsbycatergory() {
    this.loader.present();
    // let req = {
    //   "category_id": this.cId,
    //   "pin": this.locationPin

    // }
    // console.log(req);
    this.userservice.getallshopsbycategory(this.cId,this.locationPin).subscribe(
      data => {
        this.loader.dismiss();

        let getcurretnhour = new Date().getHours();
        let getcurrentMinut = new Date().getMinutes();
        console.log("Current hour ", getcurretnhour)
        console.log("Current minute ", getcurrentMinut)
        console.log("currenttiim", getcurretnhour + '.' + getcurrentMinut);
        this.currenttime = getcurretnhour + '.' + getcurrentMinut;

        this.shops = data['data'];
        console.log(this.shops);
        this.msg = "DATA FOUND";

      },
      error => {
        this.loader.dismiss();

        this.msg = "NO DATA FOUND";


      }
    )
  }
  getcartitems() {
    // let req = {
    //   "user_id": this.userdetails['userid']
    // }
    let uid = JSON.parse(localStorage.getItem("qboylogin"));
    this.userservice.getcartitems(uid['userid']).subscribe(
      data => {
        console.log((data));
        this.cartlist = data['data'];
      
        this.cartlength = this.cartlist.length;
       
      },
      error => {
      }
    )
  }
}

const datashops = [
  {
    id: 643,
    images: "./assets/images/food-banner1.jpg",
    sName: "Adithaya Hotel",
    sStatus: "opend",

  },
  {
    id: 532,
    images: "./assets/images/food-banner2.jpg",
    sName: "Venice Haripad",
    sStatus: "opend",

  },
  {
    id: 232,
    images: "./assets/images/food-banner3.jpg",
    sName: "Murali Hotel",
    sStatus: "closed",

  },
  {
    id: 874,
    images: "./assets/images/food-banner4.jpg",
    sName: "Burger Junction ",
    sStatus: "opend",
  },
  {
    id: 193,
    images: "./assets/images/food-banner5.jpg",
    sName: "chicken chikago",
    sStatus: "closed",
  }
]