import {ErrorHandler, Injectable, Injector, NgZone} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpStatusCode} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthService} from "../auth-service/auth.service";

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private injector: Injector,
              private zone: NgZone) {
  }

  handleError(error: any): void {
    if (error.rejection?.status === HttpStatusCode.Unauthorized) {
      console.log("here");
      const router = this.injector.get<Router>(Router);
      const authService = this.injector.get<AuthService>(AuthService);
      authService.localLogout();
      this.zone.run(() => router.navigate(['/login']));
      return;
    }
    this.handleUnknownError(error);
  }

  private handleUnknownError(error: any): void {
    if (environment.production) {
      // TODO: Show fancy error message
    } else {
      console.log(error);
    }
  }

}
