import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// otp module
import { NgOtpInputModule } from 'ng-otp-input';

// Load Icons
import { defineElement } from "@lordicon/element";

// Components
import { SigninComponent } from "./signin/signin.component";
import { SignUpComponent } from './signup/signup.component';
import { TwoStepComponent } from './twostep/twostep.component';
import { LogoutComponent } from './logout/logout.component';
import { LockScreenComponent } from './lockscreen/lockscreen.component';
import { PassCreateComponent } from './pass-create/pass-create.component';
import { PassResetComponent } from './pass-reset/pass-reset.component';
import { SuccessMsgComponent } from './success-msg/success-msg.component';

const routes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'lockscreen', component: LockScreenComponent },
  { path: 'pass-create', component: PassCreateComponent },
  { path: 'pass-reset', component: PassResetComponent },
  { path: 'success-msg', component: SuccessMsgComponent },
  { path: "twostep", component: TwoStepComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}

