import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleLoginButtonComponent } from './google-login-button/google-login-button.component';
import { FacebookLoginButtonComponent } from './facebook-login-button/facebook-login-button.component';
import { TwitterLoginButtonComponent } from './twitter-login-button/twitter-login-button.component';
import { TelegramLoginButtonComponent } from './telegram-login-button/telegram-login-button.component';



@NgModule({
  declarations: [
    GoogleLoginButtonComponent,
    FacebookLoginButtonComponent,
    TwitterLoginButtonComponent,
    TelegramLoginButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GoogleLoginButtonComponent,
    FacebookLoginButtonComponent,
    TwitterLoginButtonComponent,
    TelegramLoginButtonComponent
  ]
})
export class SocialLoginControlsModule { }
