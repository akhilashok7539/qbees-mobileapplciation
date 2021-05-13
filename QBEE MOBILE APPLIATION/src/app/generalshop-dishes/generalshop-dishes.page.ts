import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { LoaderService } from '../_services/loader.service';
import { ToasterService } from '../_services/toaster.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-generalshop-dishes',
  templateUrl: './generalshop-dishes.page.html',
  styleUrls: ['./generalshop-dishes.page.scss'],
})
export class GeneralshopDishesPage implements OnInit {

  @ViewChild('slides', { static: true }) slider: IonSlides;
  segment = 0;
  shop;
  shopName: any;
  shopdeliveryTime;
  shopStatus;
  shop_id;
  products: any = [];
  userdetails;
  cartlist: any;
  cartlength: any;
  userId: any;
  shop_image: any;
  shop_rating: any;
  open_time: any;
  close_time: any;
  shop_pickp_charge: any;
  subcategory:any=[];
  category:any =[];
  categoryid:any;
  categorytype: any;
  shop_display_type:any = 'L';
  constructor(private router: Router, private usrservice: UserService, private loader: LoaderService,
    private toaster: ToasterService) { }

  ngOnInit() {
    // this.shop = JSON.parse(sessionStorage.getItem("shop"));
    // this.shopName = this.shop['shop_name'];
    // this.shopdeliveryTime = this.shop['shop_deliverytime'];
    // this.shopStatus = this.shop['shop_status'];
    // this.shop_display_type = this.shop['shop_display_type'];
    // this.shop_id = this.shop['shop_id'];
  }
  add(p) {
    if (p.dish_status == 'Inactive') {
      this.toaster.itemnotavialable();
    }
    else {

      this.loader.present();
      this.userdetails = JSON.parse(localStorage.getItem("qboylogin"));
      console.log(p);

      console.log("add clicked");
      let req = {
        "menu_id": p.item_id,
        "qnty": 1,
        "price":p.itm_srate,
        // console.log(req);

      }
      console.log(req);
      this.usrservice.addtocart(req,this.userdetails['userid']).subscribe(
        data => {
          this.loader.dismiss();
          this.toaster.addtocartsuccess();
          this.getcartitems();
        },
        error => {
          this.loader.dismiss();

          this.toaster.erroraddtocart();
        }
      )
    }

  }
  displaylist(){
    this.shop_display_type = 'L';
  }
  displaygrid()
  {
    this.shop_display_type = 'B';

  }
  ionViewWillEnter() {
    this.shop = JSON.parse(sessionStorage.getItem("shop"));
    this.shopName = this.shop['shop_name'];
    this.shopdeliveryTime = this.shop['deliveryTime'];
    this.shopStatus = this.shop['shop_state'];
    // this.shop_display_type = this.shop['shop_display_type'];
    this.shop_id = this.shop['shop_id'];
    
    this.shop_image = this.shop['shop_image'];
    this.shop_rating = this.shop['shop_rating'];
    this.open_time = this.shop['open_time'];
    this.close_time = this.shop['clos_time'];
    this.shop_pickp_charge = this.shop['pickupRate'];
    this.category = JSON.parse(sessionStorage.getItem("shopname"));
    this.categorytype = this.category['category_name']
    this.getallproductByshopiD();
    this.getcartitems();
    this.getsubcategorybyshopId();
  }
  getcartitems() {

    this.userdetails = JSON.parse(localStorage.getItem("qboylogin"));
    this.userId = this.userdetails['userid'];
    console.log(this.userId);

    let req = {
      "user_id": this.userId
    }
    this.usrservice.getcartitems(this.userId).subscribe(
      data => {
        console.log((data));
        this.cartlist = data['data'];

        this.cartlength = this.cartlist.length;



      },
      error => {
      }
    )
  }
  getallproductByshopiD() {
    this.loader.present();

    let req = {
      "shop_id": this.shop_id
    }
    this.usrservice.getallproduct(this.shop_id).subscribe(
      data => {
        this.loader.dismiss();

        console.log(data);
        this.products = data['data'];

      },
      error => {
        this.loader.dismiss();

      }
    )
  }
  viewProduct(products) {
    sessionStorage.setItem("products", JSON.stringify(products));
    this.router.navigate(['product-detailed-list'])
  }
  async segmentChanged(ev: any) {
    await this.slider.slideTo(this.segment);
  }
  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }

  getsubcategorybyshopId()
  {
    // this.usrservice.getsubcategorybygenralmenu(this.shop_id).subscribe(
    //   data =>{
    //     this.subcategory = data;
        
    //   },
    //   error =>{

    //   }
    // )
  }
  subcategorychange($event){
    console.log($event.target.value);
    
  }
}
