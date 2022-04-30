import { environment } from "../environments/environment";
import {HttpClient} from "@angular/common/http";

const fullpath = (rel: string) => environment.baseApiUrl + rel;

const auth = {
  login: () => fullpath('auth/login'),
  logout: () => fullpath('auth/logout'),
};

const user = {
  getMe: () => fullpath('users/get-me'),
}

export const apiMap = {
  auth,
  user,
};
