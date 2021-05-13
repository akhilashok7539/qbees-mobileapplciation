export const environment = {
  production: true,
  apiUrl: "https://dashboard.qbees.in/",

  // login api
  LOGIN: "users/register",
  // verify otp api
  VERIFY_OTP: "users/verify/",
  // get subcategory api
  SUBCATEGORY: "cource/restaurent",
  // get category by user location
  CATEGORY_BY_LOCATION: "category/location/",
  // add user profile
  UPDATE_PROFILE: "users/register/",
  // get all places
  PLACES: "location/all",
  // get combob by location
  COMBO: "offers/combo_offer/",
  // get shops by category
  SHOP_BY_CATEGORY: "shop/",
  // get dishes by subcategory
  DISHES_BY_SUBCATEGORY: "addrestaurantmenu/",
  // get all dishes
  ALL_DISHES: "addrestaurantmenu/dishes/",
  // get all dishes general
  DISHES_GENERAL: "addrestaurantmenu/dishes/",
  // update user profile
  UPDATE_UESR_PROFILE: "users/profile/edit/",
  // add item to cart
  ADD_PRODUCT_TO_CART: "cart/add/",
  // get cart list items
  GET_CART_ITEMS: "cart/item/",
  // Book an order
  PLACE_ORDER: "orders/add/",
  // get order items by userid
  ORDER_LIST_BY_USERID: "orders/user/",
  // update cart quanity
  UPDATE_QUANTITY: "cart/qnty/",
  // get cart count
  CART_COUNT: "cart/count/",
  // remove items from cart by item Id
  REMOVE_CART_ITEMS: "cart/remove/",
  // get messagess
  GET_MESSAGES: "message/location/",

  // banner
  GET_OFFER_BANNER :"offers/location/Offers/",

  GET_TOP_DEALS:"cart/top_deal/location/",
  // subcategory by shopid
  SUBCATEGORY_BY_SHOPID:"addrestaurantmenu/shop/cource/",
  UPDATE_CART_QUANTITY : "cart/qnty/",  
  ITEM_BY_SUBCATEGORY_AND_SHOPID :"addrestaurantmenu/",
  // GET PREORDERS BY USER ID
  PRE_ORDER:"preorders/user/"

}
