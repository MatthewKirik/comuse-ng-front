import {
  Injectable
} from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse, HttpStatusCode
} from "@angular/common/http";
import {
  apiMap
} from "../../configs/api-map";
import {
  LoginModel
} from "../../models/login-model";
import {
  lastValueFrom
} from "rxjs";
import {
  LoginResultModel
} from "../../models/login-result-model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  public isLoggedIn(): boolean {
    const loggedInString = localStorage.getItem('loggedIn');
    if (loggedInString === 'true') return false;
    return false;
  }

  public async login(userData: LoginModel): Promise<boolean> {
    try {
      const path = apiMap.auth.login();
      const request = this.http.post<LoginResultModel>(path, userData);
      const loginResult = await lastValueFrom(request);
      localStorage.setItem('loggedIn', 'true');
      return true;
    } catch (err: any) {
      if (err.status === HttpStatusCode.Unauthorized)
        return false;
      throw err;
    }
  }

  public async logout(): Promise<boolean> {
    const path = apiMap.auth.logout();
    const request = this.http.post(path, {});
    await lastValueFrom(request);
    localStorage.removeItem('loggedIn');
    return true;
  }
}
