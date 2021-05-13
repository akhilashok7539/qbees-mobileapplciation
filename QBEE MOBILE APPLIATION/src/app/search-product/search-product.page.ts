import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from '../_services/loader.service';
import { ToasterService } from '../_services/toaster.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.page.html',
  styleUrls: ['./search-product.page.scss'],
})
export class SearchProductPage implements OnInit {
  searchtext;
  location;
  userDetails;
  products;
  message: string;
  constructor(private router: Router, private userservice: UserService,private toaster:ToasterService,private loader:LoaderService) { }

  ngOnInit() {
  }
  back() {
    this.router.navigate(['folder/Inbox'])
  }
  ionViewWillEnter() {
    this.userDetails = JSON.parse(localStorage.getItem('currentUserDetails'));



    this.location = this.userDetails['location'];

  }
  search() {
    this.loader.present();
    // let req =
    // {
    //   "pin": this.location,
    //   "search_keywrd": this.searchtext
    // }
    this.userservice.search(this.location,this.searchtext).subscribe(
      data => {
        this.loader.dismiss();
        console.log(data);
        this.products = data['data']
        if(this.products.length == 0)
        {
      
          this.message = "No data found";
        }
        else{
       
          this.message = "data found";
        }
      },
      error => {
        this.loader.dismiss();

      }
    )
  }
  searchkeyword(s){
    console.log(s);
    this.userservice.search(this.location,s).subscribe(
      data => {
        this.loader.dismiss();
        console.log(data);
        this.products = data['data']
        if(this.products.length == 0)
        {
      
          this.message = "No data found";
        }
        else{
       
          this.message = "data found";
        }
      },
      error => {
        this.loader.dismiss();

      }
    )
  }
  add(p) {
    console.log(p);
    this.loader.present();
      this.userDetails = JSON.parse(localStorage.getItem("qboylogin"));
      console.log(p);

      console.log("add clicked");
      let req = {
        "menu_id": p.item_id,
        "qnty": 1,
        "price":p.itm_srate,
        // console.log(req);

      }
      console.log(req);
      this.userservice.addtocart(req,this.userDetails['userid']).subscribe(
      data => {
        this.loader.dismiss();
        if(data == null)
        {
          this.toaster.erroraddtocart();

        }
        else{

        this.toaster.addtocartsuccess();

        }
      },
      error => {
        this.loader.dismiss();
        this.toaster.erroraddtocart();
      }
    )

  }
  viewProduct(products) {
    sessionStorage.setItem("products", JSON.stringify(products));
    this.router.navigate(['product-detailed-list'])
  }
}
