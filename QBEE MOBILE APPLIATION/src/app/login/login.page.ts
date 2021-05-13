import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ToastController } from '@ionic/angular';
import { LoaderService } from '../_services/loader.service';
import { ToasterService } from '../_services/toaster.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  mobnumber:any;
  constructor(private toastController: ToastController,private loader:LoaderService,private menu:MenuController,
    private router:Router,private userservice:UserService,private toaster:ToasterService) { }
    ionViewWillEnter() {
      this.menu.enable(false);
   }
    ionViewDidLeave() {
      this.menu.enable(true);
   } 
  ngOnInit() {
    
  }
  sendOtp(){
    var uname = new String(this.mobnumber) 
    if(this.mobnumber == '' || this.mobnumber == null || this.mobnumber == undefined)
    {
      let myToast = this.toastController.create({
        message: 'Please enter your Mobile Number',
        cssClass: "toast-scheme ",
        duration: 2000
      }).then((toastData) => {
        console.log(toastData);
        toastData.present();
      });
    }
    else if(uname.length == 10)
    {
      this.loader.present();
      console.log(this.mobnumber);
      let req = {
        "phone":this.mobnumber
      }
      this.userservice.login(req).subscribe(
        data =>{
          this.loader.dismiss();

          sessionStorage.setItem("mobNumber",this.mobnumber);
          localStorage.setItem('qboylogin',JSON.stringify(data));
          this.router.navigate(['/otplogin']);
          this.toaster.otpsend();
        },
        error =>{
          this.loader.dismiss();
          this.toaster.errorotpsend();
        }
      )
    }
    else {
      let myToast = this.toastController.create({
        message: 'Mobile Number must be 10 digit',
        cssClass: "toast-scheme ",
        duration: 2000
      }).then((toastData) => {
        console.log(toastData);
        toastData.present();
      });
    }
      
  }
}
