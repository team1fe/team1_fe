export const ROUTES = Object.freeze({
  HOME: "/home",

  MYPAGE: "/mypage",

  RESTAURANT_DETAIL: (restaurantId = ":restaurantId") =>
    `/restaurants/${restaurantId}`,
});
