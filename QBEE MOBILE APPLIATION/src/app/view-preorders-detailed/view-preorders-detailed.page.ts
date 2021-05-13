import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-preorders-detailed',
  templateUrl: './view-preorders-detailed.page.html',
  styleUrls: ['./view-preorders-detailed.page.scss'],
})
export class ViewPreordersDetailedPage implements OnInit {
  preorders:any = [];
  products:any = [];
  constructor(private router:Router) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.preorders = JSON.parse(sessionStorage.getItem("prdorderitems"));
    this.products = this.preorders['products:'];
    console.log(this.products);
    
  }
  back()
  {
    this.router.navigate(['/allpreoders']);
  }
}
