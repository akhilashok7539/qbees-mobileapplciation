import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AlertService } from '../_services/alert.service';
import { LoaderService } from '../_services/loader.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  address;
  userdetails;
  cartlist = [];
  cartlength;
  cartItems: any = [];
  actutaltotal;
  totalS;
  userid: any;
  homeAddress: any = [];
  officeaddrss: any;
  other_address: any;
  arraylist = [];
  totalamout;
  constructor(private router: Router, private userservice: UserService, private toastrcontroller: ToastController,
    private alert: AlertService, private loader: LoaderService) { }

  ngOnInit() {
  }
  back() {
    this.router.navigate(['cart']);
  }
  ionViewWillEnter() {
    this.userdetails = JSON.parse(localStorage.getItem("qboylogin"));
    this.totalamout = sessionStorage.getItem("totalamount")
    // this.cartItems = JSON.parse(sessionStorage.getItem("cartdetailedOrder"));
    this.getcartitems();
    this.getalladdress();
  }
  getcartitems() {
    this.loader.present();
    this.userdetails = JSON.parse(localStorage.getItem("qboylogin"));
    let req = {
      "user_id": this.userdetails['userid']
    }
    this.userservice.getcartitems(this.userdetails['userid']).subscribe(
      data => {
        console.log((data));
        this.cartlist = data['data'];
        console.log(this.cartlist);

        this.loader.dismiss();

        this.cartlength = this.cartlist.length;
        console.log("cart length" + this.cartlength);

        this.getTotal();
        let arr = [];

        for (let j = 0; j < this.cartlist.length; j++) {
          arr.push(
            {  // "itemid": 
              "qty": this.cartlist[j]['qty'],
              // "price": this.cartlist[i]['price']
            }
          )
          console.log("product array" + arr);

        }
        let other = []; // your other array...

        this.cartlist.map(item => {
          return {
            item_id: item.itemid,
            name:item.item_name,
            qnty: item.qty,
            price: item.price
          }
        }).forEach(item => this.arraylist.push(item));

        console.log(JSON.stringify(this.arraylist))

      },
      error => {
        this.loader.dismiss();

      }
    )
  }
  confirm() {
    // if(this.address == "")
    // {
    //   this.toastrcontroller.create({
    //     message: 'Please choose a address!',
    //     cssClass: "toast-scheme ",
    //     duration: 2000
    //   }).then((toastData) => {
    //     console.log(toastData);
    //     toastData.present();
    //   });
    // }
    // else 
    // {

    // this.loader.present();
    this.userdetails = JSON.parse(localStorage.getItem("qboylogin"));
    console.log(this.arraylist);
    
    let req = {
      "total_price":sessionStorage.getItem("totalamount"),
      "payment_mode": 'COD',
      "radeem": sessionStorage.getItem("reddemcheckstatus"),
      
      "datas": this.arraylist
    }
    console.log(req);
    this.userservice.bookorder(req,this.userdetails['userid']).subscribe(
      data => {
        this.loader.dismiss();
        console.log(data["bookingid"]);
        this.alert.exitalert(data["bookingid"]);
      },
      error => {
        this.loader.dismiss();

      }
    )
    // }

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
  getalladdress() {
    this.userdetails = JSON.parse(localStorage.getItem("qboylogin"));
    this.userid = this.userdetails['userid'];
    let req = {
      "userid": this.userid
    }
    this.userservice.getalladdress(this.userid).subscribe(
      data => {
        console.log(data);
      this.homeAddress = data;

      },
      error => {

      }
    )
  }

}
