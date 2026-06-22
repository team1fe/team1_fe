export const ROUTES = Object.freeze({
  HOME: "/home",

  LOGIN: "/login",
  SIGNUP_EMAIL: "/signup/email",
  SIGNUP_PASSWORD: "/signup/password",
  SIGNUP_NICKNAME: "/signup/nickname",
  SIGNUP_SUCCESS: "/signup/success",

  MYPAGE: "/mypage",
  COLLEGE: "/mypage/college",
  DEPARTMENT: "/mypage/department",
  FAVORITE: "/mypage/favorite",

  QR: "/qrpage",

  RESTAURANT_DETAIL: (restaurantId = ":restaurantId") =>
    `/restaurants/${restaurantId}`,
});
