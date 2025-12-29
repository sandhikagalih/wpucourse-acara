import instance from "@/libs/axios/instance";
import endpoint from "./endpoint.constant";
import {
  IActivation,
  ILogin,
  IProfile,
  IRegister,
  IUpdatePassword,
} from "@/types/Auth";

const authServices = {
  register: (payload: IRegister) =>
    instance.post(`${endpoint.AUTH}/register`, payload),
  activation: (payload: IActivation) =>
    instance.post(`${endpoint.AUTH}/activation`, payload),
  login: (payload: ILogin) => instance.post(`${endpoint.AUTH}/login`, payload),
  getProfileWithToken: (token: string) =>
    instance.get(`${endpoint.AUTH}/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
  getProfile: () => instance.get(`${endpoint.AUTH}/me`),
  updateProfile: (payload: IProfile) =>
    instance.put(`${endpoint.AUTH}/update-profile`, payload),
  updatePassword: (payload: IUpdatePassword) =>
    instance.put(`${endpoint.AUTH}/update-password`, payload),
};

export default authServices;
