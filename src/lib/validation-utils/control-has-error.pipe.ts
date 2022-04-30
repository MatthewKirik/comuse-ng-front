import {Pipe, PipeTransform} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {hasError, isTouched} from "./validation-utils";

@Pipe({
  name: 'controlHasError',
  pure: false
})
export class ControlHasErrorPipe implements PipeTransform {

  transform(form: FormGroup,
            controlName: string,
            errorName: string,
            restrict: 'touched' | 'pristine' | 'any' = 'touched'): boolean {
    let passesRestriction = true;
    if (restrict == 'touched')
      passesRestriction = isTouched(form, controlName);
    else if (restrict == 'pristine')
      passesRestriction = !isTouched(form, controlName);
    return passesRestriction && hasError(form, controlName, errorName);
  }
}
