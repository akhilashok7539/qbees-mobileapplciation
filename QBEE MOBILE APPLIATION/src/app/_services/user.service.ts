import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiurl: any;

  constructor(private http: HttpClient) {
    this.apiurl = environment.apiUrl;
    console.log(this.apiurl);

  }
  // MASTER ADMIN PHONE NUMBER
  GETMASTERADMINCONTACT(){
    return this.http.get(this.apiurl+'master_phone');
  }
  //  LOGIN API //
  login(req) {
    return this.http.post(this.apiurl + environment.LOGIN, req);
  }
  //  OTP LOGIN //
  otplogin(req,id) {
    return this.http.post(this.apiurl + environment.VERIFY_OTP+id, req);
  }
  //  GET ALL PLACES //
  getallplaces() {
    return this.http.get(this.apiurl + environment.PLACES);
  }
  //  SAVE PROFILE //
  saveProfile(req,id) {
    return this.http.post(this.apiurl + environment.UPDATE_PROFILE+id, req);
  }
  //  GET REDEEM POINTS //
  getpoints() {
    return this.http.get(this.apiurl + 'pointsa.php');
  }
  // GET OFFERS SLIDERS //
  getalloffers(req) {
    return this.http.get(this.apiurl + environment.GET_OFFER_BANNER+req);
  }
  //  TOP DEALS //
  getalltopdeals(req,id) {
    return this.http.get(this.apiurl + environment.GET_TOP_DEALS+req+'/'+id);
  }
  //  CATEGORYS //
  getallcategorys(req) {
    return this.http.get(this.apiurl + environment.CATEGORY_BY_LOCATION+req);
  }
  getallshopsbycategory(catid,pin) {
    return this.http.get(this.apiurl + environment.SHOP_BY_CATEGORY+catid+'/'+pin);
  }
  getallproduct(id) {
    return this.http.get(this.apiurl + environment.ALL_DISHES+id);
  }
  getmenusbycategoryid(shopid,itemid)
  {
    return this.http.get(this.apiurl+environment.ITEM_BY_SUBCATEGORY_AND_SHOPID+shopid+'/'+itemid)
  }
  getsubcategory(id){
    return this.http.get(this.apiurl+environment.SUBCATEGORY_BY_SHOPID+id);
  }
  addtocart(req,id) {
    console.log(id);
    
    return this.http.post(this.apiurl +environment.ADD_PRODUCT_TO_CART+id,req);
  }
  updatecartquantity(req,uid,iid){
    return this.http.patch(this.apiurl+environment.UPDATE_CART_QUANTITY+uid+'/'+iid,req);
  }
  getcartitems(req) {
    return this.http.get(this.apiurl + environment.GET_CART_ITEMS+req);

  } 
  getsublocations(id)
  {
    return this.http.get(this.apiurl+'sublocation/'+id);
  }
  removefromcart(uid,iid)
  {
    return this.http.delete(this.apiurl +environment.REMOVE_CART_ITEMS+'/'+uid+'/'+iid);

  }
  search(locaionid,searchtext)
  {
    return this.http.get(this.apiurl + 'addrestaurantmenu/search/'+locaionid+'?data='+searchtext);

  }
  updateuseraddress(req)
  {
    return this.http.post(this.apiurl + 'addressbook/add', req);

  }
  updateofficeaddress(req)
  {
    return this.http.post(this.apiurl + 'update_officeaddress.php', req);

  }
  updateotheraddress(req)
  {
    return this.http.post(this.apiurl + 'update_otheraddress.php', req);

  }
  getalladdress(req)
  {

    return this.http.get(this.apiurl +'addressbook/user/'+req);

  }
  bookorder(req,id)
  {
    return this.http.post(this.apiurl +environment.PLACE_ORDER+id,req);
    
  }
  getallorder(id)
  {
    return this.http.get(this.apiurl +environment.ORDER_LIST_BY_USERID+id);

  }
  addpreOrder(req,id){
    return this.http.post(this.apiurl+'preorders/add/'+id,req);
  }
  getPreorder(id)
  {
    return this.http.get(this.apiurl+environment.PRE_ORDER+id);
  }
  getallmessage(id){
    return this.http.get(this.apiurl+'message/location/'+id);
  }
  getallshopsbylocation(locationPin)
  {
    return this.http.get(this.apiurl+'medicalshop/location/'+locationPin);
  }
  postdata(formData,uid){
    return this.http.post(this.apiurl+'prescription/add/'+uid,formData);
  }
  getprescriptionbyuid(id){
    return this.http.get(this.apiurl+'prescription/user/'+id);
  }
}

