import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserService } from './_services/user.service';
import { AuthInterceptor } from './_interceptors/interceptor';
import { AlertService } from './_services/alert.service';
import { LoaderService } from './_services/loader.service';
import { ToasterService } from './_services/toaster.service';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { FCM } from '@ionic-native/fcm/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),

    AppRoutingModule
  ],
  providers: [
    FCM,
    Geolocation,
    StatusBar,
    // NativeGeocoder,
    UserService,
    SplashScreen,CallNumber,
  
    AlertService,LoaderService,ToasterService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
   
  ],
  bootstrap: [AppComponent],
  // schemas:  [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
