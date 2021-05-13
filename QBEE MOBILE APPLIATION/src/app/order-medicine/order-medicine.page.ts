import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-order-medicine',
  templateUrl: './order-medicine.page.html',
  styleUrls: ['./order-medicine.page.scss'],
})
export class OrderMedicinePage implements OnInit {
  precription :any;
  textname = "Upload Prescription";
  userdetails:any =[];
  locationPin;
  shops:any = [];
  formData= new FormData();
  cnumber;
  nots;
  description;
  pharmacy;
  uid;
  logindetails:any=[];
  files;
  constructor(private userservice:UserService,private router:Router) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    console.log(this.precription);
    this.getpharmay();
  }
  image($event){
    console.log($event.target.value);
    this.precription = $event.target.value;
    this.files = $event.target.files;
    this.precription = this.files.item(0);
    if(this.precription == undefined)
    {
      this.textname = "Upload Prescription";
    }
    else{
      this.textname = "Sucessfully Uploaded";
    }
    
    
  }
  getpharmay()
  {
    this.userdetails = JSON.parse(localStorage.getItem("currentUserDetails"));
    this.locationPin = this.userdetails['location'];
    this.logindetails = JSON.parse(localStorage.getItem("qboylogin"));
    this.uid = this.logindetails['userid']
    console.log(this.uid);
    
    this.userservice.getallshopsbylocation(this.locationPin).subscribe(
      data =>{
        console.log(data);
        this.shops = data;
      },
      error =>{

      }
    )
  }
  submit()
  {
    this.formData.append("pharmacy_id",this.pharmacy)
    this.formData.append("description",this.description)
    this.formData.append("contact",this.cnumber)
    this.formData.append("state","Active")
 
    this.formData.append("nots",this.nots)
    this.formData.append("upload",this.precription)
    this.userservice.postdata(this.formData,this.uid).subscribe(
      data =>{
        alert("Uploaded Successfully");
        this.router.navigate(['/english-medicine'])
      },
      error =>{

      }
    )
  }
}
