import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { LoaderService } from '../_services/loader.service';
import { ToasterService } from '../_services/toaster.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-listtopdeals',
  templateUrl: './listtopdeals.page.html',
  styleUrls: ['./listtopdeals.page.scss'],
})
export class ListtopdealsPage implements OnInit {
  topDeals:any =[];
  userdetails;
  msg;
  cartlist :any=[];
  cartlength;
  constructor(private router:Router,private userservice:UserService,
    private toastrcontroller:ToastController,
    private loader:LoaderService,private toaster:ToasterService) { }

  ngOnInit() {

    // this.topDeals = results;
  }
  back(){
    this.router.navigate(['folder/Inbox'])
  }
  ionViewWillEnter()
  {
    this.cartlength = 0;
    this.getalltopdeals();
    this.getcartitems();
  }
  getalltopdeals() {
    this.loader.present();

    this.userdetails = JSON.parse(localStorage.getItem("qboylogin"));
    let location = JSON.parse(localStorage.getItem("currentUserDetails"));
    console.log(location['location']);
    
        // this.userId = this.userdetails["userid"];
    // this.loader.present();
    // let req = {
    //   "pin": this.userdetails['pin'],
    //   "user_id": this.userdetails['userid']
    // }
    this.userservice.getalltopdeals(location['location'],this.userdetails['userid']).subscribe(
      data => {
        this.loader.dismiss();

        console.log(data);
        this.topDeals = data['data'];
        this.msg = "data found";

       

      },
      error => {
        this.loader.dismiss();

        this.msg = "No data found";
      }
    )
  }
  addtocart(p)
  {
    this.loader.present();

    this.userdetails = JSON.parse(localStorage.getItem("qboylogin"));
    console.log(p);

    console.log("add clicked");
    let req = {
      "menu_id": p._id,
      "qnty": 1,
      "price": p.offr_price,
}
    console.log(req);
    console.log(req);
    console.log(this.userdetails['userid']);
    this.userservice.addtocart(req,this.userdetails['userid']).subscribe(
      data => {
     this.loader.dismiss();

        this.toaster.addtocartsuccess();
        this.getcartitems();
        this.getalltopdeals();
      },
      error => {
     this.loader.dismiss();

        this.toaster.erroraddtocart();
      }
    )
  }
  getcartitems() {
    let req = {
      "user_id": this.userdetails['userid']
    }
    this.userservice.getcartitems(this.userdetails['userid']).subscribe(
      data => {
        console.log((data));
        this.cartlist = data['data'];

        this.cartlength = this.cartlist.length;



      },
      error => {
      }
    )
  }
  add(s) {
    // s.  
    this.userdetails = JSON.parse(localStorage.getItem("qboylogin"));
    let userId = this.userdetails["userid"];
    console.log(s);
    let quantiyselling = s.No_users;
    console.log(quantiyselling);
    // if(4<quantiyselling)
    // {
    //   console.log("adsadas");
    // }
    // else{
    //   console.log("xzxczxc");
    // }

    let t = s['cart_qnty'];
    let y = 1;

    if (parseInt(t) < parseInt(quantiyselling)) {
      let quantity = parseInt(t) + y;
      console.log(quantity);
      let req = {
            "qnty": quantity,
      }
      console.log(req);
      this.userservice.updatecartquantity(req,userId,s._id).subscribe(
        data => {
          this.getalltopdeals();
         
  
            this.toaster.quatityupdate();
          
          
        },
        error => {
          this.toaster.unabletoupdatequatity();
        }
      )

    }
    else {
      this.toaster.numbberofquantiyupdatlimt();
    }


  }
  minus(s) {
    this.userdetails = JSON.parse(localStorage.getItem("qboylogin"));
    let userId = this.userdetails["userid"];
    
    let t = s['cart_qnty'];
    let y = 1;
    if (parseInt(t) == 1) {
      this.toastrcontroller.create({
        message: 'Please remove item from cart',
        cssClass: "toast-scheme ",
        duration: 2000
      }).then((toastData) => {
        console.log(toastData);
        toastData.present();
      });
    }
    else {
      let quantity = parseInt(t) - y;
      console.log(quantity);
      let req = {
        "qnty": quantity,
  }
  console.log(req);
  this.userservice.updatecartquantity(req,userId,s._id).subscribe(
        data => {
          this.getalltopdeals();
          this.toaster.quatityupdate();
        },
        error => {
          this.toaster.unabletoupdatequatity();
        }
      )

    }
  }
}

// const results = [
//   {
//     id: 643,
//     images:"./assets/images/food-banner1.jpg",
//     pName:"Ghee rice",
//     price:"100",
//     offerprice:"80"
//   },
//   {
//     id: 532,
//     images:"./assets/images/food-banner2.jpg",
//     pName:"chiken Friend Rice",
//     price:"100",
//     offerprice:"70"
    
//   },
//   {
//     id: 232,
//     images:"./assets/images/food-banner3.jpg",
//     pName:"Vegitable biriyanii",
//     price:"100",
//     offerprice:"40"

//   },
//   {
//     id: 874,
//     images:"./assets/images/food-banner4.jpg",
//     pName:"Mutton biriyanii",
//     price:"100",
//     offerprice:"30"
//   },
//   {
//     id: 193,
//     images:"./assets/images/food-banner5.jpg",
//     pName:"Beef biriyanii",
//     price:"100",
//     offerprice:"10"
//   }
// ]