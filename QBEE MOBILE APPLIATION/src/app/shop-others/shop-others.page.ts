import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-shop-others',
  templateUrl: './shop-others.page.html',
  styleUrls: ['./shop-others.page.scss'],
})
export class ShopOthersPage implements OnInit {
  userdetails:any =[];
  locationPin;
  shops:any = [];
  constructor(private userservie:UserService) { }
  ionViewWillEnter() {

    this.getpharmay();
  }
  ngOnInit() {
    this.userdetails = JSON.parse(localStorage.getItem("currentUserDetails"));
    this.locationPin = this.userdetails['location'];
    this.userservie.getallshopsbylocation(this.locationPin).subscribe(
      data =>{
        console.log(data);
        this.shops = data;
      },
      error =>{

      }
    )
  }
  getpharmay()
  {
    this.userdetails = JSON.parse(localStorage.getItem("currentUserDetails"));
    this.locationPin = this.userdetails['location'];
    this.userservie.getallshopsbylocation(this.locationPin).subscribe(
      data =>{
        console.log(data);
        this.shops = data;
      },
      error =>{

      }
    )
  }
  view(s){
    
  }
}
