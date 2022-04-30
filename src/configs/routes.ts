import {Routes} from "@angular/router";
import {LoginComponent} from "../app/guest/login/login.component";
import {NotFoundComponent} from "../app/misc/not-found/not-found.component";
import {AppComponent} from "../app/app.component";
import {GuestComponent} from "../app/guest/guest.component";
import {HomeComponent} from "../app/home/home.component";

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: '',
    component: GuestComponent,
    outlet: "guest",
    children: [
      {path: 'login', component: LoginComponent},
    ]
  },
  {
    path: '',
    component: HomeComponent,
    outlet: "home",
  },
  {path: '**', component: NotFoundComponent},
]
