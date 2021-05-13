import { isGeneratedFile } from '@angular/compiler/src/aot/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ToastController } from '@ionic/angular';
import { LoaderService } from '../_services/loader.service';
import { ToasterService } from '../_services/toaster.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-otplogin',
  templateUrl: './otplogin.page.html',
  styleUrls: ['./otplogin.page.scss'],
})
export class OtploginPage implements OnInit {
  OTP: any = {
    first: '',
    second: '',
    third: '',
    forth: '',
    fifth: '',
    sixth: ''
  };
  otp1;
  otp2;
  otp3;
  otp4;
  userId;
  constructor(private userservice: UserService, private router: Router,
    private menu:MenuController,
     private toaster:ToasterService,private loader:LoaderService,
    private toastController: ToastController) { }

  ngOnInit() {
  }

  otpController(event, next, prev, index) {
    console.log(index);

    if (index == 3) {
      console.log("submit")
    }
    if (event.target.value.length < 1 && prev) {
      prev.setFocus()
      console.log("digitcomplete");

    }
    else if (next && event.target.value.length > 0) {
      next.setFocus();
    }
    else {
      return 0;
    }
  }
  ionViewWillEnter() {
    this.menu.enable(false);

    this.userId = JSON.parse(localStorage.getItem('qboylogin'));
    console.log(this.userId['UserId']);

  }
 
  ionViewDidLeave() {
    this.menu.enable(true);
 } 
  moveFocus(event, nextElement, previousElement) {
    console.log(event.keyCode);
    if (event.keyCode === 8 && previousElement) {
      previousElement.setFocus();
    } else if (event.keyCode >= 48 && event.keyCode <= 57) {
      if (nextElement) {
        nextElement.setFocus();
      }
    } else if (event.keyCode >= 96 && event.keyCode <= 105) {
      if (nextElement) {
        nextElement.setFocus();
      }
    } else {
      event.path[0].value = '';
    }
  }
  login() {
    this.loader.present();
    console.log(this.otp1 + '' + this.otp2 + '' + this.otp3 + '' + this.otp4);
    let req =
    {
     
      "otp": this.otp4
    }
    let uid = this.userId['userid'];
    console.log(uid);
    
    
    this.userservice.otplogin(req,uid).subscribe(
      data => {
        this.loader.dismiss();
        console.log(data['success'])
        if(data['success']== false)
        {
          let myToast = this.toastController.create({
            message: 'Invalid OTP',
            cssClass: "toast-scheme ",
            duration: 2000
          }).then((toastData) => {
            console.log(toastData);
            toastData.present();
          });
        }
        else
        {
          this.router.navigate(['/profiledetails']);
       
          localStorage.setItem("currentUserDetails",JSON.stringify(data));
        }
        // this.router.navigate[('/profiledetails')];
       
        // window.location.reload();
      },
      error => {
        this.loader.dismiss();
        this.otp1 = '';
        this.otp2= '';
        this.otp3= '';
        this.otp4= '';
        let myToast = this.toastController.create({
          message: 'Invalid OTP',
          cssClass: "toast-scheme ",
          duration: 2000
        }).then((toastData) => {
          console.log(toastData);
          toastData.present();
        });
      }
    )
  }
  resend(){
    this.loader.present();
    let mob = sessionStorage.getItem('mobNumber');
    console.log(mob);
    let req = {
      "phone":mob
    }
    this.userservice.login(req).subscribe(
      data =>{
        this.loader.dismiss();
        this.toaster.otpsend();
      },
      error =>{
        this.loader.dismiss();
        this.toaster.errorotpsend();
      }
    )
    
  }
}
