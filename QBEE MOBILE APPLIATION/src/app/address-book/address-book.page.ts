import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-address-book',
  templateUrl: './address-book.page.html',
  styleUrls: ['./address-book.page.scss'],
})
export class AddressBookPage implements OnInit {

  address:any =[];
  userdetails;
  userid;
  homeAddress;
  officeaddrss;
  other_address: any;
  constructor(private router:Router,private usrservice:UserService) { }

  ngOnInit() {
    this.address = list;
  }
  add()
  {
    this.router.navigate(['add-user-new-address'])
  }
  ionViewWillEnter(){
    this.getalladdress();
  }
  getalladdress(){
    this.userdetails = JSON.parse(localStorage.getItem("qboylogin"));  
    this.userid = this.userdetails['userid'];
    let req = {
      "userid":this.userid
    }
    this.usrservice.getalladdress(this.userid).subscribe(
      data =>{
        console.log(data);
        this.address = data;
        // this.homeAddress = data['home_address'];
        // this.officeaddrss = data['office_address'];
        // this.other_address = data['other_address'];
        // console.log(this.other_address);
        // let arr = []
        // if(this.homeAddress != '')
        // {
        //   arr.push(0,this.homeAddress)
        // }
        // if(this.officeaddrss !='')
        // {
        //   arr.push(1,this.officeaddrss)

        // }
        // if(this.other_address !='')
        // {
        //   arr.push(2,this.other_address)

        // }
        // console.log(arr);
        
      },
      error =>{

      }
    )
  }
 
  back(){ 
    this.router.navigate(['folder/inbox']);
  }
}

const list = [
  {
    "userName":"akhil",
    "address":"puthukundom,karthikappally,haripad",
    "pincode":"690516",
    "phone":"9526626604",
    "status":"selected"
  },
  {
    "userName":"akhil",
    "address":"puthukundom,karthikappally,haripad",
    "pincode":"690516",
    "phone":"9526626604",
    "status":"notselected"

  },
  {
    "userName":"akhil",
    "address":"puthukundom,karthikappally,haripad",
    "pincode":"690516",
    "phone":"9526626604",
    "status":"notselected"

  },
  {
    "userName":"akhil",
    "address":"puthukundom,karthikappally,haripad",
    "pincode":"690516",
    "phone":"9526626604",
    "status":"notselected"

  }
]