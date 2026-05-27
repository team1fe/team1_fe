export const ROUTES = Object.freeze({
  HOME: "/home",

  MYPAGE: "/mypage",
  COLLEGE: "/mypage/college",
  DEPARTMENT: "/mypage/department",
  FAVORITE: "/mypage/favorite",

  RESTAURANT_DETAIL: (restaurantId = ":restaurantId") =>
    `/restaurants/${restaurantId}`, 
 
 
  
});


 
