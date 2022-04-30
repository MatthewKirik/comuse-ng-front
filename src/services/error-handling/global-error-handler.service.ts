import {ErrorHandler, Injectable} from '@angular/core';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerService implements ErrorHandler {

  constructor() {
  }

  handleError(error: any): void {
  }

  private handleUnknownError(error: any): void {
    if (environment.production) {
      // TODO: Show fancy error message
    }
    else {

    }
  }

}
