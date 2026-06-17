export const ROUTES = Object.freeze({
  LOGIN: "/login",

  SIGNUP_EMAIL: "/signup/email",
  SIGNUP_PASSWORD: "/signup/password",
  SIGNUP_NICKNAME: "/signup/nickname",
  SIGNUP_SUCCESS: "/signup/success",

  HOME: "/home",
  MYPAGE: "/mypage",

  RESTAURANT_DETAIL: (restaurantId = ":restaurantId") =>
    `/restaurants/${restaurantId}`,
});
