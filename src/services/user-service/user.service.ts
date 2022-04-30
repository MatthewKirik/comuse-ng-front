import {Injectable} from '@angular/core';
import {UserModel} from "../../models/user-model";
import {apiMap} from "../../configs/api-map";
import {HttpClient} from "@angular/common/http";
import {lastValueFrom} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public CurrentUser: UserModel;

  constructor(private http: HttpClient) {
  }

  public async cacheCurrentUser(): Promise<void> {
    const path = apiMap.user.getMe();

    const request = this.http.post<UserModel>(path, {});
    const user = await lastValueFrom(request);
    this.CurrentUser = user;
  }
}
