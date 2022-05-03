import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, NgForm, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {LoginModel} from "../../../models/login-model";
import {FormGroup, FormControl} from "@angular/forms";
import {AuthService} from "../../../services/auth-service/auth.service";
import {isControlTouched} from "../../../lib/validation-utils/validation-utils";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  private wrongCredentialsWereEntered = false;
  public loginForm: FormGroup;

  constructor(private authService: AuthService,
              private fb: FormBuilder,
              private router: Router) {
    this.loginForm = fb.group({
      email: ['', [Validators.required, Validators.email, this.wrongCredentialsValidator()]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(30), this.wrongCredentialsValidator()]],
    });
  }

  private wrongCredentialsValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (this.wrongCredentialsWereEntered && !isControlTouched(control))
        return {wrongCredentials: "Wrong credentials were entered"}
      return null;
    }
  }

  public async onConfirm(): Promise<void> {
    this.wrongCredentialsWereEntered = false;
    const data = new LoginModel(
      this.loginForm.get("email")?.value,
      this.loginForm.get("password")?.value);
    this.loginForm.markAsPristine();
    this.loginForm.markAsUntouched();
    this.loginForm.reset();
    await new Promise(r => setTimeout(r, 2000));
    const loggedIn = await this.authService.login(data);
    await new Promise(r => setTimeout(r, 2000));
    if (loggedIn) {
      await this.router.navigate(['']);
    } else {
      this.wrongCredentialsWereEntered = true;
      this.loginForm?.get("email")?.updateValueAndValidity();
      this.loginForm?.get("password")?.updateValueAndValidity();
    }
  }

  ngOnInit() {
  }

}
