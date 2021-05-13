import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(private toastrcontroller:ToastController,private router:Router) { }
 addtocartsuccess() {
  // <img src="./assets/images/download-svg.png" alt="" style="height: 11px !important;"> 
   this.toastrcontroller.create({
      message: '<img src="./assets/images/download-svg.png" alt="" style="height: 11px !important;">  Item Add to cart ',
      cssClass: 'customToastClass',
      buttons: [
        {
          side: 'end',
         
          text: 'View Cart',
          handler: () => {
            this.router.navigate(["cart"])
          }
        }
      ],
      duration: 2000
    }).then((toastData) => {
      console.log(toastData);
      toastData.present();
    });
  }
 erroraddtocart() {
    this.toastrcontroller.create({
       message: '<img src="./assets/images/closesvg.png" alt="" style="height: 11px !important;">  Unable to add item to cart please try again after some time!',
       cssClass: "toast-scheme ",
       duration: 2000
     }).then((toastData) => {
       console.log(toastData);
       toastData.present();
     });
   }
   itemalreadyadded() {
    this.toastrcontroller.create({
       message: '<img src="./assets/images/closesvg.png" alt="" style="height: 11px !important;"> Item Already added!',
       cssClass: "toast-scheme ",
       duration: 2000
     }).then((toastData) => {
       console.log(toastData);
       toastData.present();
     });
   }
  profileupdate(){
    this.toastrcontroller.create({
      message: '<img src="./assets/images/download-svg.png" alt="" style="height: 11px !important;"> Profile Update Successfully!',
      cssClass: "toast-scheme ",
      duration: 2000
    }).then((toastData) => {
      console.log(toastData);
      toastData.present();
    });
  }
  errorupdateprofile(){
    this.toastrcontroller.create({
      message: 'Unable to Update Profile Successfully!',
      cssClass: "toast-scheme ",
      duration: 2000
    }).then((toastData) => {
      console.log(toastData);
      toastData.present();
    });
  }
  removecart(){
    this.toastrcontroller.create({
      message: '<img src="./assets/images/download-svg.png" alt="" style="height: 11px !important;"> Removed Item from cart!',
      cssClass: "toast-scheme ",
      duration: 2000
    }).then((toastData) => {
      console.log(toastData);
      toastData.present();
    });
  }
  errorremovecart(){
    this.toastrcontroller.create({
      message: 'Unable to Removed Item from cart!',
      cssClass: "toast-scheme ",
      duration: 2000
    }).then((toastData) => {
      console.log(toastData);
      toastData.present();
    });
  }
  quantiydecrese()
  {
    this.toastrcontroller.create({
      message: 'Please remove item from cart!',
      cssClass: "toast-scheme ",
      duration: 2000
    }).then((toastData) => {
      console.log(toastData);
      toastData.present();
    });
  }
  quatityupdate()
  {
    this.toastrcontroller.create({
      message: '<img src="./assets/images/download-svg.png" alt="" style="height: 11px !important;"> Quantity Updatd!',
      cssClass: "toast-scheme ",
      duration: 2000
    }).then((toastData) => {
      console.log(toastData);
      toastData.present();
    });
  }
  unabletoupdatequatity()
  {
    this.toastrcontroller.create({
      message: 'Unable to update quantity!',
      cssClass: "toast-scheme ",
      duration: 2000
    }).then((toastData) => {
      console.log(toastData);
      toastData.present();
    });
  }
  otpsend()
  {
    this.toastrcontroller.create({
      message: '<img src="./assets/images/download-svg.png" alt="" style="height: 11px !important;"> OTP Sent to your Mobile Number!',
      cssClass: "toast-scheme ",
      duration: 2000
    }).then((toastData) => {
      console.log(toastData);
      toastData.present();
    });
  }
  errorotpsend()
  {
    this.toastrcontroller.create({
      message: 'Unable to sent OTP,Please try again after some time!',
      cssClass: "toast-scheme ",
      duration: 2000
    }).then((toastData) => {
      console.log(toastData);
      toastData.present();
    });
  }
  addresstypeerror()
  {
    this.toastrcontroller.create({
      message: 'Please choose a address type',
      cssClass: "toast-scheme ",
      duration: 2000
    }).then((toastData) => {
      console.log(toastData);
      toastData.present();
    });
  }
  addressupdate()
  {
    this.toastrcontroller.create({
      message: 'Address Updated!',
      cssClass: "toast-scheme ",
      duration: 2000
    }).then((toastData) => {
      console.log(toastData);
      toastData.present();
    });
  }
  errroraddressupdate()
  {
    this.toastrcontroller.create({
      message: 'Unable to update address.please try again after some time!',
      cssClass: "toast-scheme ",
      duration: 2000
    }).then((toastData) => {
      console.log(toastData);
      toastData.present();
    });
  }
  
  numbberofquantiyupdatlimt()
  {
    this.toastrcontroller.create({
      message: 'Your Limit Exceeds',
      cssClass: "toast-scheme ",
      duration: 2000
    }).then((toastData) => {
      console.log(toastData);
      toastData.present();
    });
  }
    
  itemnotavialable()
  {
    this.toastrcontroller.create({
      message: 'Item not avilable at this time',
      cssClass: "toast-scheme ",
      duration: 2000
    }).then((toastData) => {
      console.log(toastData);
      toastData.present();
    });
  }
}
