import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ToasterService } from '../_services/toaster.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-add-user-new-address',
  templateUrl: './add-user-new-address.page.html',
  styleUrls: ['./add-user-new-address.page.scss'],
})
export class AddUserNewAddressPage implements OnInit {
  userid: any;
  addresstype :any= '';
  address;
  name;
  contact;
  userdetails;

  constructor(private router:Router,private usrservie:UserService,
    private toaster:ToasterService,private toastrcontroller:ToastController) { }

  ngOnInit() {
  }
  back(){ 
    this.router.navigate(['address-book']);
  }
 
  save()
  {
    this.userdetails = JSON.parse(localStorage.getItem("qboylogin"));  
    this.userid = this.userdetails['userid'];
  
      let req ={
        "userId":this.userid,
        "add_type":this.addresstype,
        "address":this.address
      }
      console.log(req);
      this.usrservie.updateuseraddress(req).subscribe(
        data =>{
          this.toaster.addressupdate();
          this.router.navigate(['address-book']);

        },
        error=>{
          this.toaster.errroraddressupdate();

        }
      )

    }
    
    
  
}
