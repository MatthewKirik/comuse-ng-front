import {Injectable, OnInit} from '@angular/core';
import {UserModel} from "../../models/user-model";
import {apiMap} from "../../configs/api-map";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, lastValueFrom} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public currentUser = new BehaviorSubject<UserModel | null>(null);

  constructor(private http: HttpClient) {
    this.cacheCurrentUser();
  }

  public async cacheCurrentUser(): Promise<void> {
    const path = apiMap.user.getMe();
    const request = this.http.get<UserModel>(path);
    const user = await lastValueFrom(request);
    this.currentUser.next(user);
  }
}
