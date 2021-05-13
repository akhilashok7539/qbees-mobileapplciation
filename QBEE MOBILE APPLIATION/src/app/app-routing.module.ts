import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// import { AddressBookPage } from './address-book/address-book.page';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    // folder/Inboxlogin
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'search-product',
    loadChildren: () => import('./search-product/search-product.module').then( m => m.SearchProductPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'otplogin',
    loadChildren: () => import('./otplogin/otplogin.module').then( m => m.OtploginPageModule)
  },
  {
    path: 'shops',
    loadChildren: () => import('./shops/shops.module').then( m => m.ShopsPageModule)
  },
  {
    path: 'productlist',
    loadChildren: () => import('./productlist/productlist.module').then( m => m.ProductlistPageModule)
  },
  {
    path: 'product-detailed-list',
    loadChildren: () => import('./product-detailed-list/product-detailed-list.module').then( m => m.ProductDetailedListPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'my-orders',
    loadChildren: () => import('./my-orders/my-orders.module').then( m => m.MyOrdersPageModule)
  },
  {
    path: 'listtopdeals',
    loadChildren: () => import('./listtopdeals/listtopdeals.module').then( m => m.ListtopdealsPageModule)
  },
  {
    path: 'address-book',
    loadChildren: () => import('./address-book/address-book.module').then( m => m.AddressBookPageModule)
  },
  {
    path: 'add-user-new-address',
    loadChildren: () => import('./add-user-new-address/add-user-new-address.module').then( m => m.AddUserNewAddressPageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./checkout/checkout.module').then( m => m.CheckoutPageModule)
  },
  {
    path: 'profiledetails',
    loadChildren: () => import('./profiledetails/profiledetails.module').then( m => m.ProfiledetailsPageModule)
  },
  {
    path: 'testingcomponets',
    loadChildren: () => import('./testingcomponets/testingcomponets.module').then( m => m.TestingcomponetsPageModule)
  },

  {
    path: 'navigaiondrawer',
    loadChildren: () => import('./navigaiondrawer/navigaiondrawer.module').then( m => m.NavigaiondrawerPageModule)
  },
  {
    path: 'generalshop-dishes',
    loadChildren: () => import('./generalshop-dishes/generalshop-dishes.module').then( m => m.GeneralshopDishesPageModule)
  },
  {
    path: 'imageviewer',
    loadChildren: () => import('./imageviewer/imageviewer.module').then( m => m.ImageviewerPageModule)
  },
  {
    path: 'sidebar',
    loadChildren: () => import('./sidebar/sidebar.module').then( m => m.SidebarPageModule)
  },
  {
    path: 'pre-order',
    loadChildren: () => import('./pre-order/pre-order.module').then( m => m.PreOrderPageModule)
  },
  {
    path: 'upate-profile',
    loadChildren: () => import('./upate-profile/upate-profile.module').then( m => m.UpateProfilePageModule)
  },
  {
    path: 'allpreoders',
    loadChildren: () => import('./allpreoders/allpreoders.module').then( m => m.AllpreodersPageModule)
  },
  {
    path: 'view-preorders-detailed',
    loadChildren: () => import('./view-preorders-detailed/view-preorders-detailed.module').then( m => m.ViewPreordersDetailedPageModule)
  },
  {
    path: 'chat-messages',
    loadChildren: () => import('./chat-messages/chat-messages.module').then( m => m.ChatMessagesPageModule)
  },
  {
    path: 'homescreen',
    loadChildren: () => import('./homescreen/homescreen.module').then( m => m.HomescreenPageModule)
  },
  {
    path: 'qbees-services-home',
    loadChildren: () => import('./qbees-services-home/qbees-services-home.module').then( m => m.QbeesServicesHomePageModule)
  },
  {
    path: 'pharmarcy',
    loadChildren: () => import('./pharmarcy/pharmarcy.module').then( m => m.PharmarcyPageModule)
  },
  {
    path: 'pharmacy-home',
    loadChildren: () => import('./pharmacy-home/pharmacy-home.module').then( m => m.PharmacyHomePageModule)
  },
  {
    path: 'english-medicine',
    loadChildren: () => import('./english-medicine/english-medicine.module').then( m => m.EnglishMedicinePageModule)
  },
  {
    path: 'auyrvedic-medicine',
    loadChildren: () => import('./auyrvedic-medicine/auyrvedic-medicine.module').then( m => m.AuyrvedicMedicinePageModule)
  },
  {
    path: 'order-medicine',
    loadChildren: () => import('./order-medicine/order-medicine.module').then( m => m.OrderMedicinePageModule)
  },
  {
    path: 'shop-others',
    loadChildren: () => import('./shop-others/shop-others.module').then( m => m.ShopOthersPageModule)
  },
  {
    path: 'prescription',
    loadChildren: () => import('./prescription/prescription.module').then( m => m.PrescriptionPageModule)
  },

];



@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
