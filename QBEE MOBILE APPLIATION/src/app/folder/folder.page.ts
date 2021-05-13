import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { IonSlides, MenuController, Platform, ToastController } from '@ionic/angular';
import { AlertService } from '../_services/alert.service';
import { LoaderService } from '../_services/loader.service';
import { ToasterService } from '../_services/toaster.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  @ViewChild('slideWithNav', { static: false }) slideWithNav: IonSlides;
  @ViewChild('slideWithNav3', { static: false }) slideWithNav3: IonSlides;
  sliderOne: any;
  sliderTwo: any;
  sliderThree: any;

  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  };
  slideOptsTwo = {
    initialSlide: 1,
    slidesPerView: 2,
    loop: true,
    centeredSlides: true,
    spaceBetween: 20
  };
  slideOptsThree = {
    initialSlide: 0,
    slidesPerView: 1.8,
    // autoplay: true
  };
  offers:any = [];
  category = [];
  userdetails: any;
  userId: any;
  categories: any;
  cartlist: any;
  cartlength: any;
  isloggedIn = false;
  topdeals: any = [];
  msg: string;
  backbutton;
  uid;
  constructor(private activatedRoute: ActivatedRoute, private toaster: ToasterService,
    private geolocation:Geolocation,private menu: MenuController,private toastrcontroller:ToastController,
    private loader: LoaderService, private platform:Platform,private alert:AlertService,
    private router: Router, private userservice: UserService) {
    this.category = cat
    this.sliderOne =
    {
      isBeginningSlide: true,
      isEndSlide: false,
      slidesItems: [
        {
          id: 995,
          image: "./assets/images/slide1.jpg"
        },
        {
          id: 925,
          image: "./assets/images/slide2.jpg"
        },
        {
          id: 940,
          image: "./assets/images/slide3.jpg"
        },
        {
          id: 943,
          image: "./assets/images/slide2.jpg"
        },

      ]
    };
    // this.sliderThree =
    // {
    //   isBeginningSlide: true,
    //   isEndSlide: false,
    //   slidesItems: [
    //     {
    //       id: 643,
    //       images: "./assets/images/food-banner1.jpg",
    //       pName: "Ghee rice",
    //       price: "100",
    //       offerprice: "80"
    //     },
    //     {
    //       id: 532,
    //       images: "./assets/images/food-banner2.jpg",
    //       pName: "chiken Friend Rice",
    //       price: "100",
    //       offerprice: "70"

    //     },
    //     {
    //       id: 232,
    //       images: "./assets/images/food-banner3.jpg",
    //       pName: "Vegitable biriyanii",
    //       price: "100",
    //       offerprice: "40"

    //     },
    //     {
    //       id: 874,
    //       images: "./assets/images/food-banner4.jpg",
    //       pName: "Mutton biriyanii",
    //       price: "100",
    //       offerprice: "30"
    //     },
    //     {
    //       id: 193,
    //       images: "./assets/images/food-banner5.jpg",
    //       pName: "Beef biriyanii",
    //       price: "100",
    //       offerprice: "10"
    //     }
    //   ]
    // };
    // console.log(this.sliderThree);
    this.backbutton = this.platform.backButton.subscribe(
      async () => {
        if (this.router.url === '/folder/Inbox') {
          console.log('Enter')
          this.alert.exitappplication();
        }
      }
    )

  }
  openMenu() {
   this.menu.open();
  }
  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    // this.category = cat;
  }
  ionViewWillEnter() {
    // window.location.reload();
    this.isloggedIn = JSON.parse(localStorage.getItem("isloggedin"));
    console.log(this.isloggedIn);
    if (this.isloggedIn == null) {
      this.isloggedIn == false;
    }
    else {
      this.isloggedIn == true;
    }

    if (this.isloggedIn == true) {
      this.userdetails = JSON.parse(localStorage.getItem("currentUserDetails"));
      for(let i =0;i<1;i++)
      {
        // window.location.reload();
        this.router.navigate(['/folder/Inbox'])
      }
      this.getallcategorys();
      this.getalloffers();
      this.getalltopdeals();
      this.getcartitems();
    }

    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      console.log(resp);
      
     }).catch((error) => {
       console.log('Error getting location', error);
     });
     
     let watch = this.geolocation.watchPosition();
     watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
     });
  }
  slideNext(object, slideView) {
    slideView.slideNext(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });
  }

  slidePrev(object, slideView) {
    slideView.slidePrev(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });;
  }

  SlideDidChange(object, slideView) {
    this.checkIfNavDisabled(object, slideView);
  }

  checkIfNavDisabled(object, slideView) {
    this.checkisBeginning(object, slideView);
    this.checkisEnd(object, slideView);
  }

  checkisBeginning(object, slideView) {
    slideView.isBeginning().then((istrue) => {
      object.isBeginningSlide = istrue;
    });
  }
  checkisEnd(object, slideView) {
    slideView.isEnd().then((istrue) => {
      object.isEndSlide = istrue;
    });
  }
  shops(s) {
    sessionStorage.setItem("shopname", JSON.stringify(s));
    this.router.navigate(['shops']);
  }
  viewall() {
    this.router.navigate(['listtopdeals']);

  }

  getalloffers() {
    this.userdetails = JSON.parse(localStorage.getItem("currentUserDetails"));
    this.userId = this.userdetails["userid"];
    // this.loader.present();
    let req = {
      "pin": this.userdetails['location'],
    }
    this.userservice.getalloffers(this.userdetails['location']).subscribe(
      data => {
        this.offers = data;
        console.log(this.offers);
        this.sliderOne =
        {
          isBeginningSlide: true,
          isEndSlide: false,
          slidesItems: this.offers
        };

      },
      error => {

      }
    )
  }
  getalltopdeals() {
    this.userdetails = JSON.parse(localStorage.getItem("currentUserDetails"));
    this.userId = this.userdetails["userid"];
    this.uid = JSON.parse(localStorage.getItem("qboylogin"));
    console.log("userid",this.uid['userid'])
    this.loader.present();
    let req = {
      "pin": this.userdetails['pin'],
      "user_id": this.userdetails['userid']
    }
    this.userservice.getalltopdeals(this.userdetails['location'],this.uid['userid']).subscribe(
      data => {
        this.loader.dismiss();

        console.log(data);
        this.topdeals = data['data'];
        this.msg = "data found";

        // for(let i =0;i<2;i++)
        // {
        //   this.topdeals.push(this.topdeals[i])
        // }
        console.log(this.topdeals);

        this.sliderThree =
        {
          isBeginningSlide: true,


          slidesItems: this.topdeals
        };
        console.log(this.sliderThree);

      },
      error => {
        this.loader.dismiss();

        this.msg = "No data found";
      }
    )
  }
  doRefresh(event) {
    setTimeout(() => {
   
      this.ionViewWillEnter();
      event.target.complete();
    }, 1000)
  }
  addtocart(p) {
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
    console.log(this.userdetails['userid']);

    this.userservice.addtocart(req,this.userdetails['userid']).subscribe(
      data => {
        this.loader.dismiss();

        // arr.push(p.dish_id)
        // localStorage.setItem("cartitms",JSON.stringify(p))
        // if(localStorage.getItem("cartitms"))
        // {

        // }
        if(data['message']=='please compleate previous order')
        {
          this.toastrcontroller.create({
            message: '<img src="./assets/images/closesvg.png" alt="" style="height: 11px !important;">'+data['message'],
            cssClass: "toast-scheme ",
            duration: 2000
          }).then((toastData) => {
            console.log(toastData);
            toastData.present();
          });
        }
        else{
          this.toaster.addtocartsuccess();

        }
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
    // let req = {
    //   "user_id": this.userdetails['userid']
    // }
    this.userdetails = JSON.parse(localStorage.getItem("qboylogin"));
    
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
  banner(s)
  {
    console.log(s.offr_add);
    if(s.offr_add == "1")
    {

    }
    else
    {
      this.router.navigate(['/productlist'])
      let req  = {
        "shop_name":s['shop_id'].shop_name,
        "shop_id":s['shop_id']._id
      }
      sessionStorage.setItem("shop", JSON.stringify(req))
    }
    

 
  }
  getallcategorys() {
    // this.loader.present();
    let udetaillocations= JSON.parse(localStorage.getItem("currentUserDetails"));
    this.userId = udetaillocations["userid"];
    let req = {
      "user_id": this.userId
    }
    this.userservice.getallcategorys(udetaillocations['location']).subscribe(
      data => {
        this.loader.dismiss();

        console.log(data);
        this.category = data['data'];
      },
      error => {
        this.loader.dismiss();

      }
    )
  }

  

  add(s) {
    // s.  
    this.userdetails = JSON.parse(localStorage.getItem("qboylogin"));
    this.userId = this.userdetails["userid"];
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
      this.userservice.updatecartquantity(req,this.userId,s._id).subscribe(
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
    this.userId = this.userdetails["userid"];
    
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
  this.userservice.updatecartquantity(req,this.userId,s._id).subscribe(
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
  // getGeoencoder(latitude, longitude) {
  //   this.nativeGeocoder.reverseGeocode(latitude, longitude, this.geoencoderOptions)
  //     .then((result: NativeGeocoderResult[]) => {
  //       this.address = this.generateAddress(result[0]);
  //     })
  //     .catch((error: any) => {
  //       alert('Error getting location' + JSON.stringify(error));
  //     });
  // }
  // generateAddress(addressObj) {
  //   let obj = [];
  //   let address = "";
  //   for (let key in addressObj) {
  //     obj.push(addressObj[key]);
  //   }
  //   obj.reverse();
  //   for (let val in obj) {
  //     if (obj[val].length)
  //       address += obj[val] + ', ';
  //   }
  //   return address.slice(0, -2);
  // }
}

const cat = [
  {
    "id": 1,
    "image": "./assets/images/ataa.jpg"
  },
  {
    "id": 2,
    "image": "./assets/images/diary.jpg"
  },
  {
    "id": 3,
    "image": "./assets/images/sham.jpg"
  },
  {
    "id": 4,
    "image": "./assets/images/bis.jpg"
  },
  {
    "id": 5,
    "image": "./assets/images/tea.jpg"
  },
  {
    "id": 6,
    "image": "./assets/images/sham.jpg"
  },


]