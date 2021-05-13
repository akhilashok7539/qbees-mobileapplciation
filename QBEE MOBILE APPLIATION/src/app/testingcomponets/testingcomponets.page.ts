import { Component, OnInit } from '@angular/core';
import { MenuController, Platform } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';

// declare var google;

@Component({
  selector: 'app-testingcomponets',
  templateUrl: './testingcomponets.page.html',
  styleUrls: ['./testingcomponets.page.scss'],
})
export class TestingcomponetsPage implements OnInit {
  // map: any;
  // marker: any;
  // lat: any;
  // lon: any;
  // timstamp: any;

  // address: string;

  // // Location coordinates
  // latitude: number;
  // longitude: number;
  // accuracy: number;
  // geoencoderOptions: NativeGeocoderOptions = {
  //   useLocale: true,
  //   maxResults: 5
  // };
  constructor(private menu: MenuController, private Platform: Platform,
    private geolocation: Geolocation, private nativeGeocoder: NativeGeocoder) {
    // this.Platform.ready().then(() => {
    //   var mapOptions = {
    //     center: { lat: 9.257369, lng: 76.464164 },
    //     zoom: 7

    //   }
    //   this.map = new google.maps.Map(document.getElementById("map"), mapOptions);
    //   this.getcoroderinate();
    // })

  }

  ngOnInit() {
    // this.getcoroderinate();
  }

  // ionViewWillEnter() {
  //   this.getcoroderinate();


  // }
  // getcoroderinate() {
  //   var ref = this;
  //   this.geolocation.getCurrentPosition().then((resp) => {
  //     // resp.coords.latitude
  //     // resp.coords.longitude
  //     console.log(resp);
  //     var gps = new google.maps.LatLng
  //     (resp.coords.latitude, resp.coords.longitude);
  //     this.latitude = resp.coords.latitude;
  //     this.longitude = resp.coords.longitude;
  //     this.accuracy = resp.coords.accuracy;
  //     if (ref.marker == null) {
  //       ref.marker = new google.maps.Marker({
  //         position: gps,
  //         map: ref.map,
  //         title: 'my postions'
  //       })
  //     }
  //     else 
  //     {
  //       ref.marker.setPosition(gps);
  //     }
  //     ref.map.panTo(gps);
  //     ref.latitude = resp.coords.latitude;
  //     ref.longitude = resp.coords.longitude;

  //     this.getGeoencoder(resp.coords.latitude, resp.coords.longitude);
  //   }).catch((error) => {
  //     console.log('Error getting location', error);
  //   });

  //   let watch = this.geolocation.watchPosition();
  //   watch.subscribe((data) => {

  // data can be a set of coordinates, or an error (if an error occurred).
  // data.coords.latitude
  // data.coords.longitude
  //   });
  // }
  // getLocation() {
  //   var ref = this;
  //   let watch = this.geolocation.watchPosition();

  //   watch.subscribe((position) => {
  //     var gps = new google.maps.LatLng
  //       (this.latitude, this.longitude);
  //     if (ref.marker == null) {
  //       ref.marker = new google.maps.Marker({
  //         position: gps,
  //         map: ref.map,
  //         title: 'my postions'
  //       })
  //     }
  //     else 
  //     {
  //       ref.marker.setPosition(gps);
  //     }
  //     ref.map.panTo(gps);
  //     ref.latitude = position.coords.lattitude;
  //     ref.longitude = this.longitude;

  //   })
  // }
  // getGeoencoder(latitude, longitude) {
  //   this.nativeGeocoder.reverseGeocode(latitude, longitude, this.geoencoderOptions)
  //     .then((result: NativeGeocoderResult[]) => {
  //       this.address = this.generateAddress(result[0]);
  //       console.log(this.address);

  //     })

  //     .catch((error: any) => {
  //       alert('Error getting location' + JSON.stringify(error));
  //     });
  // this.nativeGeocoder.reverseGeocode(latitude, longitude)
  // .then((result) => {
  //   this.address = this.generateAddress(result[0]);
  // })
  // .catch((error: any) => {
  //   alert('Error getting location' + JSON.stringify(error));
  // });
  // generateAddress(addressObj) {
  //   let obj = [];
  //   let address = "";
  //   for (let key in addressObj) {
  //     obj.push(addressObj[key]);
  //   }
  //   obj.reverse();
  //   for (let val in obj) {
  //     if (obj[val].length)
  //       address += obj[val] + ', ';
  //   }
  //   return address.slice(0, -2);
  // }
}



