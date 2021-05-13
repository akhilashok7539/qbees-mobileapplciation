import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from '../_services/loader.service';
import { ToasterService } from '../_services/toaster.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  userdetails;
  cartlength;
  cartlist: any = [];
  totalS;
  rmchecked = false;
  quantity: number;
  points;
  msg;
  actutaltotal;
  yoursave :any = '0.00';
  constructor(private router: Router, private loader:LoaderService,
    private userservice: UserService,private toaster:ToasterService) { }

  ngOnInit() {
  }
  bookorder() {
    console.log(this.rmchecked);
    sessionStorage.setItem("reddemcheckstatus",JSON.stringify(this.rmchecked));
    sessionStorage.setItem("totalamount",this.totalS+30);
    this.router.navigate(['checkout']);
  }
  preorder()
  {
    sessionStorage.setItem("reddemcheckstatus",JSON.stringify(this.rmchecked));
    sessionStorage.setItem("totalamount",this.totalS+30);
   this.router.navigate(['pre-order'])
  }
  ionViewWillEnter() {
    this.userdetails = JSON.parse(localStorage.getItem("qboylogin"));
    this.getcartitems();
  

  }
  getcartitems() {
    this.loader.present();
    // let req = {
    //   "user_id": this.userdetails['userid']
    // }
    this.userservice.getcartitems(this.userdetails['userid']).subscribe(
      data => {
    this.loader.dismiss();

        console.log((data));
        this.cartlist = data['data'];
        this.points = data['redemmpoint'];
        this.cartlength = this.cartlist.length;

        this.getTotal();
        if(this.cartlength == 0)
        {
          this.msg = "NO DATA FOUND";

        }
        else
        {

          this.msg = "DATA FOUND";

        }

      },
      error => {
    this.loader.dismiss();

        this.msg = "NO DATA FOUND";
      }
    )
  }
  LoginRemCheck(e) {
    console.log(e);
    if (e == true) {
      this.totalS = this.totalS - this.points
      this.yoursave = this.points;
    }
    else {
      this.totalS = this.actutaltotal;
      this.yoursave = "0.00";
    }

  }
  getTotal() {
    var total = 0;
    for (let i = 0; i < this.cartlist.length; i++) {

      let x = this.cartlist[i]['price'];
      console.log(x);

      let y = this.cartlist[i]['qty'];
      console.log(y);
      console.log(x * y);

      total = total + x * y;
      console.log("tOTAL VALUE " + total);

    }
    this.actutaltotal = total;
    this.totalS = total;
    // return total;
  }
  add(s) {
    console.log(s);
    let t = s['qty'];
    let y = 1;
    let quantity = parseInt(t) + y;
    console.log(quantity);
    let req = {
      "qnty":quantity

    }
    console.log(req);
    this.userservice.updatecartquantity(req,this.userdetails['userid'],s.itemid).subscribe(
      data => {
        this.getcartitems();
        this.toaster.quatityupdate();
      },
      error => {
        this.toaster.unabletoupdatequatity();
      }
    )

  }
  minus(s) {
    let t = s['qty'];
    if (parseInt(t) != 1) {


      console.log(s);

      let y = 1;
      let quantity = parseInt(t) - y;
      console.log(quantity);
      let req = {
        "qnty":quantity
  
      }
      console.log(req);
      this.userservice.updatecartquantity(req,this.userdetails['userid'],s.itemid).subscribe(
        data => {
          this.getcartitems();
         this.toaster.quatityupdate();
        },
        error => {
          this.toaster.unabletoupdatequatity();
        }
      )
    }
    else{
      this.toaster.quantiydecrese();
    }
  }
  remove(cartlist) {

    // let req = {
    //   "user_id": this.userdetails['userid'],
    // }
    // console.log(req);
    this.userservice.removefromcart(this.userdetails['userid'],cartlist['itemid']).subscribe(
      data =>{
        this.getcartitems();
        this.toaster.removecart();
      },
      error =>{
        this.toaster.errorremovecart();
      }
    )
    
  }
} 
