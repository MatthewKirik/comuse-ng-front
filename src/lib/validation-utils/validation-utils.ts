import {AbstractControl, FormGroup} from "@angular/forms";

export const hasError = (form: FormGroup, controlName: string, errorName: string): boolean => {
  return !!form?.get(controlName)?.hasError(errorName);
}

export const isTouched = (form: FormGroup, controlName: string): boolean => {
  const control = form?.get(controlName);
  return isControlTouched(control);
}
export const isControlTouched = (control: AbstractControl | null): boolean => {
  return !!control?.touched || !!control?.dirty;
}
