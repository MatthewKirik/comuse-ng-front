import {ErrorHandler, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuestModule } from './guest/guest.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CommonControlsModule} from "../lib/controls/common-controls/common-controls.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {routes} from "../configs/routes";
import {AllowCredentialsInterceptor} from "../services/interceptors/allow-credentials.interceptor";
import {HomeModule} from "./home/home.module";
import {GlobalErrorHandler} from "../services/error-handling/global-error-handler.service";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    GuestModule,
    CommonControlsModule,
    RouterModule.forRoot(routes),

    BrowserAnimationsModule,
    HomeModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AllowCredentialsInterceptor,
      multi: true,
    },
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler,
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
