import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-imageviewer',
  templateUrl: './imageviewer.page.html',
  styleUrls: ['./imageviewer.page.scss'],
})
export class ImageviewerPage implements OnInit {
  @Input() dishimage: string;

  constructor(private navCtrl:ModalController,private platform:Platform ) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    console.log("namae",this.dishimage);

  }
  closeModal() {
    this.navCtrl.dismiss();
}
}
