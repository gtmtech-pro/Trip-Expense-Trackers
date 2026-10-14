import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

// Login Auth
import { AuthenticationService } from '../../core/services/auth.service';
import { ToastService } from './toast-service';
import { LoginModel } from '../../models/login.model';
import { CommonService } from '../../services/common.service';
import { UserModel } from '../../models/user.model';
import { AppConstants } from '../../app.constants';
import { RouteConstants } from '../../constants/route.constant';
import { TripSettingModel } from '../../models/trip.setting.model';

import { MatSnackBar } from '@angular/material/snack-bar';
import { BaseComponent } from '../../common/base/base.component';
import { CookieService } from 'ngx-cookie-service';
import { ShowDialogService } from '../../shared/show-dialog.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: false
})

/**
 * Login Component
 */
export class LoginComponent extends BaseComponent<LoginModel> implements OnInit {

  // Login Form
  loginForm!: FormGroup;
  loginModel!: LoginModel;

  submitted = false;
  fieldTextType!: boolean;
  error = '';
  returnUrl!: string;
  isInvalidLogin: boolean = false;

  // set the current year
  year: number = new Date().getFullYear();

  constructor(
    override commonService: CommonService,
    override router: Router,
    override route: ActivatedRoute,
    override snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private cookieService: CookieService,
    private showDialogService: ShowDialogService,
    public toastService: ToastService) {
    super(commonService, router, route, snackBar);

    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }

    this.authenticationService.resetLogin();

    // Set the default login Model
    this.loginModel = new LoginModel();

    if (window.location.host == 'localhost:4200') {
      this.loginModel.UserId = "rakeshg";
      this.loginModel.Password = "Pass$123";
    }
  }

  override ngOnInit(): void {
    if (window.sessionStorage.getItem('currentUser')) {
      this.router.navigate(['/']);
    }

    this.loginForm = this.createLoginForm();
    this.showHideLoading(false);

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  /**
   * Form submit
   */
  onSubmit() {
    this.isInvalidLogin = false;
    this.showHideLoading(true);

    this.authenticationService.loginUser(this.loginModel)
      .subscribe((logResp: any) => {
        if (logResp.Success && logResp.Errors.length == 0) {

          var currentUser: UserModel = {
            LoginUniqueId: logResp.Result.LoginUniqueId,
            FinancialYearId: logResp.Result.FinancialYearId,
            AccountId: logResp.Result.AccountId,
            LoginId: logResp.Result.LoginId,
            Password: logResp.Result.Password,
            UserId: logResp.Result.UserId,
            UserName: logResp.Result.UserName,
            FirstName: logResp.Result.FirstName,
            LastName: logResp.Result.LastName,
            EmailId: logResp.Result.EmailId,
            Mobile: logResp.Result.Mobile,
            IsAdmin: false,
            RoleId: logResp.Result.RoleId,
            RoleName: logResp.Result.RoleId,
            DepartmentName: logResp.Result.DepartmentName,
            DesignationName: logResp.Result.DesignationName,
            AccountType: logResp.Result.AccountType,
            DateOfJoining: logResp.Result.DateOfJoining,
            LandingPageUrl: logResp.Result.LandingPageUrl,
            InvalidAttempt: logResp.Result.InvalidAttempt,
            IsLocked: logResp.Result.IsLocked,
            IsPasswordReset: logResp.Result.IsPasswordReset,
            LastLoginDate: logResp.Result.LastLoginDate,
            PasswordExpiredOn: logResp.Result.PasswordExpiredOn,
            PasswordResetToken: logResp.Result.PasswordResetToken,
            PasswordUpdateDate: logResp.Result.PasswordUpdateDate,
            TokenExpiredOn: logResp.Result.TokenExpiredWeb,
            AuthToken: logResp.Result.AuthTokenWeb,
            AuthTokenWeb: logResp.Result.AuthTokenWeb,
            RoleTransactions: []
          };

          // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
          window.sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
          AppConstants.AuthToken = currentUser.AuthToken;

          if (logResp.Result.LastLoginDate == null) {
            this.router.navigateByUrl(RouteConstants.Account.ResetPassword);
            return;
          }

          let passwordExpiredOn = new Date(logResp.Result.PasswordExpiredOn);
          let currentDate = new Date();

          if (passwordExpiredOn < currentDate) {
            this.router.navigateByUrl(RouteConstants.Account.ResetPassword);
            return;
          }

          this.authenticationService.getTransactionsAndSettings(this.loginModel)
            .subscribe((response: any) => {

              if (response[0].Success) {
                window.sessionStorage.setItem('userRoleTransactions', JSON.stringify(response[0].Results));
                window.sessionStorage.setItem('siteHeaderNavigations', JSON.stringify(response[2].Results));

                if (this.loginModel.RememberMe) {
                  this.cookieService.set('UserId', this.loginModel.UserId);
                  this.cookieService.set('Password', this.loginModel.Password);
                }
                else {
                  this.cookieService.set('UserId', '');
                  this.cookieService.set('Password', '');
                }

                this.cookieService.set('RememberMe', this.loginModel.RememberMe.toString());
              }

              // Set default Lighthouse Sesstion values
              this.TripSettings = new TripSettingModel();

              if (response[1].Success) {
                let settingAttributes = Object.keys(this.TripSettings);
                settingAttributes.forEach((settingName: any) => {

                  let settingItem = response[1].Results.find((s: any) => s.SettingName == settingName);
                  if (settingItem != null) {
                    let settingIntValue = Number(settingItem.SettingValue);
                    let settingValue = isNaN(settingIntValue) ? settingItem.SettingValue : settingIntValue;

                    this.TripSettings = { ...this.TripSettings, [settingName]: settingValue };
                  }
                });

                window.sessionStorage.setItem('TripSettings', JSON.stringify(this.TripSettings));
                this.appInfo.SupportEmailId = this.TripSettings.SupportEmail;
                this.appInfo.AppVersion = this.TripSettings.AppVersion;
              }

              this.router.navigate(['/']);
              //this.router.navigateByUrl(currentUser.LandingPageUrl);
            });
        }
        else {
          this.isInvalidLogin = true;
          this.showErrorMessage('Invalid UserId or Password', 'info-snackbar');
        }

        this.showHideLoading(false);
      });
  }

  //Create login form and returns {FormGroup}
  createLoginForm(): FormGroup {
    return this.formBuilder.group({
      UserId: new FormControl({ value: this.loginModel.UserId, disabled: false }, [Validators.maxLength(100), Validators.pattern(this.Constants.Regex.AlphaNumericWithDashDotMinusSpace)]),
      Password: new FormControl(this.loginModel.Password, [Validators.required, Validators.maxLength(50), Validators.pattern(this.Constants.Regex.Password)]),
      RememberMe: [this.loginModel.RememberMe]
    });
  }

  /**
   * Password Hide/Show
   */
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

}
