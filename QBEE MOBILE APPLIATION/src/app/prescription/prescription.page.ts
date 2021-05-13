import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.page.html',
  styleUrls: ['./prescription.page.scss'],
})
export class PrescriptionPage implements OnInit {
  logindetails:any = [];
  uid;
  prescriptions:any = [];
  constructor(private userservice:UserService) { }

  ngOnInit() {
    this.logindetails = JSON.parse(localStorage.getItem("qboylogin"));
    this.uid = this.logindetails['userid']
  }
  ionViewWillEnter() {
    this.logindetails = JSON.parse(localStorage.getItem("qboylogin"));
    this.uid = this.logindetails['userid']
    console.log(this.uid);
    this.getallprecription();
  }
  getallprecription()
  {
    this.userservice.getprescriptionbyuid(this.uid).subscribe(
      data =>{
        this.prescriptions = data;
      },
      error =>{

      }
    )
  }
}
