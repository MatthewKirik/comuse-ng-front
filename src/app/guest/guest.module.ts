import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginComponent} from './login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import {SocialLoginControlsModule} from 'src/lib/controls/social-login-controls/social-login-controls.module';
import {CommonControlsModule} from "../../lib/controls/common-controls/common-controls.module";
import {ValidationUtilsModule} from "../../lib/validation-utils/validation-utils.module";
import { GuestComponent } from './guest.component';
import {RouterModule} from "@angular/router";
import {routes} from "../../configs/routes";

@NgModule({
  declarations: [LoginComponent, GuestComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    SocialLoginControlsModule,
    BrowserModule,
    FormsModule,
    CommonControlsModule,
    ReactiveFormsModule,
    ValidationUtilsModule,
    RouterModule.forRoot(routes),
  ],
  exports: [LoginComponent, GuestComponent],
})
export class GuestModule {
}
