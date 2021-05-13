import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private alert: AlertController,private router:Router) {

  }

  async exitalert(s) {
    console.log(s);

    const alert = await this.alert.create(
      {
        header: "Booking Successfully",
        subHeader: s,
        message: "Booking Sucssfully Completed",


        buttons: [
          // {
          //   text: 'No',
          //   role: 'Cancel',
          //   cssClass: 'secondary',
          //   handler: () => {
          //     alert.dismiss();
          //   }
          // },
          {
            text: 'Ok',

            handler: () => {
              // sessionStorage.clear();
              // navigator["app"].exitApp()
              this.router.navigate(['/my-orders']);
              alert.dismiss();
            }
          }
        ]
      }
    );
    await alert.present();
  }

  async prorderalert(s) {
    console.log(s);

    const alert = await this.alert.create(
      {
        header: "Pre-Order Booked Successfully",
        subHeader: s,
        message: "Booking Sucssfully Completed",


        buttons: [
          // {
          //   text: 'No',
          //   role: 'Cancel',
          //   cssClass: 'secondary',
          //   handler: () => {
          //     alert.dismiss();
          //   }
          // },
          {
            text: 'Ok',

            handler: () => {
              // sessionStorage.clear();
              // navigator["app"].exitApp()
              this.router.navigate(['/my-orders']);
              alert.dismiss();
            }
          }
        ]
      }
    );
    await alert.present();
  }
  
  async exitappplication() {
    const alert = await this.alert.create(
      {
        header: "Confirm?",
        message: "Are you sure want to exit",
        buttons: [
          {
            text: 'No',
            role: 'Cancel',
            cssClass: 'secondary',
            handler: () => {
              alert.dismiss();
            }
          },
          {
            text: 'Yes',

            handler: () => {
              sessionStorage.clear();
              navigator["app"].exitApp()
              alert.dismiss();
            }
          }
        ]
      }
    );
    await alert.present();
  }
}
