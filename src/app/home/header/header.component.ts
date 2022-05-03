import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {UserModel} from "../../../models/user-model";
import {UserService} from "../../../services/user-service/user.service";
import {AuthService} from "../../../services/auth-service/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public profileInfoExpanded: boolean = false;
  public currentUser: BehaviorSubject<UserModel | null>;

  constructor(private userService: UserService,
              private authService: AuthService) {
    this.currentUser = userService.currentUser;
  }

  toggleProfileInfoExpand(): void {
    this.profileInfoExpanded = !this.profileInfoExpanded;
  }

  logout(): void {
    this.authService.logout();
  }

  ngOnInit(): void {
  }

}
