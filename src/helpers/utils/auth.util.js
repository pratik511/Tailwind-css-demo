import { STORAGEKEY } from "./app.config";
import localStore from "./localstore.util";

export const getToken = () => localStore.get_data(STORAGEKEY.token);

export const setLogin = (flag) => localStore.store_data(STORAGEKEY.islogin, flag);

export const getUserInfo = () => localStore.get_data(STORAGEKEY.userData);

export const setUserInfo = (data) => localStore.store_data(STORAGEKEY.userData, data);

export const setGuestId = (data) => localStore.store_data(STORAGEKEY.guestData, data);
export const getGuestId = () => localStore.get_data(STORAGEKEY.guestData);

export const userLogin = () => localStore.get_data(STORAGEKEY.islogin);

export const setToken = (token) => localStore.store_data(STORAGEKEY.token, token);

export const setRandomID = (data) => localStore.store_data(STORAGEKEY.randomID, data);

export const getRandomID = () => localStore.get_data(STORAGEKEY.randomID);

export const logout = () => {
  localStore.remove_all();
  return true;
};

export const isLoggedIn = () => {
  const islogin = userLogin();
  return islogin === 'true' ? true : false;
};

export const authenticate = () => {
  const token = getToken();
  return !!token;
};
