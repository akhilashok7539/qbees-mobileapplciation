import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ImageviewerPage } from '../imageviewer/imageviewer.page';
import { LoaderService } from '../_services/loader.service';
import { ToasterService } from '../_services/toaster.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-product-detailed-list',
  templateUrl: './product-detailed-list.page.html',
  styleUrls: ['./product-detailed-list.page.scss'],
})
export class ProductDetailedListPage implements OnInit {
  productdetails;
  dish_name;
  dish_type;
  dish_image;
  dish_id;
  dish_actualprice;
  dish_sellingprice;
  close_time;
  dish_description;
  quantity = 1;
  userdetails;
  cartlist: any;
  sliderOpt = {
    zoom: {
      maxRatio: 1,
    },
  };
  cartlength: any;
  constructor(private usrservice:UserService,public modalController: ModalController,
    private toaster:ToasterService,private loader:LoaderService) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.productdetails = JSON.parse(sessionStorage.getItem('products'));
    this.userdetails = JSON.parse(localStorage.getItem("qboylogin"));
    this.dish_id= this.productdetails['item_id'];
    this.dish_name = this.productdetails['item_name'];
    this.dish_type = this.productdetails['item_type'];
    this.dish_actualprice= this.productdetails['itm_srate'];
    this.dish_sellingprice = this.productdetails['itm_srate'];
    this.dish_description = this.productdetails['item_desc'];
    this.dish_image = this.productdetails['item_img'];
    this.getcartitems();
  } 
  minus()
  {
    if(this.quantity ==1)
    {

    }
    else 
    {
      this.quantity--
    }
  }
  plus(){
    this.quantity++
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ImageviewerPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'dishimage': this.dish_image,
      }
    });
    return await modal.present();
  }
  addtocart(){
    this.loader.present();
      let req ={
        // "user_id":this.userdetails['userid'],
        // data:[
        //   {
        //     "itemid":this.dish_id,
        //     "qty":this.quantity,
        //     "price":this.dish_actualprice,
        //   }
        // ]

        "menu_id": this.dish_id,
        "qnty": this.quantity,
        "price":this.dish_actualprice,

      }
      console.log(this.userdetails['userid']);
      this.usrservice.addtocart(req,this.userdetails['userid']).subscribe(
        data =>{
        this.loader.dismiss();

          if(data['data'] ==null)
          {
            this.toaster.itemalreadyadded();
          }
          else{
            this.toaster.addtocartsuccess();

          }
          this.getcartitems();
        },  
        error =>{
         this.loader.dismiss();

          this.toaster.erroraddtocart();
        }
      )
      
  }
  
  getcartitems() {
    let req = {
      "user_id":this.userdetails['userid'],
    }
    this.usrservice.getcartitems(this.userdetails['userid']).subscribe(
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
