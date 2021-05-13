import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '../_services/alert.service';
import { LoaderService } from '../_services/loader.service';
import { ToasterService } from '../_services/toaster.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-pre-order',
  templateUrl: './pre-order.page.html',
  styleUrls: ['./pre-order.page.scss'],
})
export class PreOrderPage implements OnInit {
  date;
  time;
  year;
  userdetails:any=[];
  cartlist:any = [];
  arraylist:any = [];
  actutaltotal;
  totalS;
  cartlength;
  constructor(private router: Router, private loader:LoaderService, private alert: AlertService,
    private userservice: UserService,private toaster:ToasterService) { }

  ngOnInit() {
    this.getcartitems();
  }

  ionViewWillEnter() {
    this.userdetails = JSON.parse(localStorage.getItem("qboylogin"));
    this.year = new Date().getFullYear();
    console.log(this.year);

  }
  preorder(){
    if(this.date == null || this.time == null)
    {

    }
    else{

    this.userdetails = JSON.parse(localStorage.getItem("qboylogin"));
    var dateFormat = this.date.split('T')[0]; 
    console.log(dateFormat);
    var timeFormat = this.time.split('T')[1];
    console.log(timeFormat.split('.')[0]);
    let timeformatted  = timeFormat.split('.')[0];
    
    let req = {
      "total_price":sessionStorage.getItem("totalamount"),
      "payment_mode": 'COD',
      "delivery_date":  dateFormat,
      "delivery_time":timeformatted,
      
      "datas": this.arraylist
    }
    console.log(req);
    
//     var str = "Apples are round, and apples are juicy."; 
// var sliced = str.slice(3, -2); 
// console.log(sliced);
this.userservice.addpreOrder(req,this.userdetails['userid']).subscribe(
  data =>{
    this.alert.prorderalert(data["bookingid"]);
  },
  error =>{ 

  }
)
}

    
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

}
