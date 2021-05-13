import { Injectable } from '@angular/core';

import { HttpRequest, HttpInterceptor, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {
  token:any;
  constructor()
   { 
    // this.token = JSON.parse(localStorage.getItem('token'));
   }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Token Interceptor');
    // this.token = JSON.parse(localStorage.getItem('token'));
    
    // const token = `eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJha2hpbGFzaG9rQHBydmFrLmluIiwiZXhwIjoxNTgwNDU3Mjg0LCJpYXQiOjE1ODA0NTQ1ODR9.U-Og3vRa12LGn37-XieCXsSOG0SFF089kvh_sQrqEAM`;
    // console.log(this.token);
    const USERNAME="qboy";
    const  PASSWORD="pwd@qboy";
    const encode = btoa(USERNAME + ":"+PASSWORD);
   
    req = req.clone({
      setHeaders: {
        Authorization:`Basic ${encode}`,
        
      },
     
    });
    console.log("APIS USED \t"+req.url);
    return next.handle(req);
  }

}