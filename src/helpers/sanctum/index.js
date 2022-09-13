import axios from "@/config/axios/index.js";

/*
 * retrieves Sanctum token from cookie named 'sanctum_token' and returns it's value
 */

export const getSanctumToken = () => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`sanctum_token=`);
  const token = parts.length === 2 ? parts.pop().split(";").shift() : null;

  return token;
};

/*
 * set new cookie named  'sanctum_token' and also append
 * Authentication: Bearer {token} header to our axios instance
 */
export const setSanctumToken = (token, expires_in) => {
  let expires = new Date();
  expires.setTime(expires.getTime() + expires_in * 1000);
  document.cookie = `sanctum_token=${token}; expires=${expires.toUTCString()}; path=/`;

  axios.defaults.headers["Authorization"] = `Bearer ${token}`;
};
