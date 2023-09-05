import axios from "axios";
import { ApiPath, BASE_URL } from "./types";
import { LoginForm } from "./types/login-form";
import { RegisterForm } from "./types/register-form";

const axiosAuth = axios.create({
  baseURL: BASE_URL,
});

export const authRepository = {
  login: async (body: LoginForm) => {
    const result = await axiosAuth.post(ApiPath.Login, body);
    return result;
  },
  register: async (body: RegisterForm) => {
    const result = await axiosAuth.post(ApiPath.Register, body);
    return result;
  },
};
