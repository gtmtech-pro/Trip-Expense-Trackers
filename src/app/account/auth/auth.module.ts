import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// otp module
import { NgOtpInputModule } from 'ng-otp-input';

// Load Icons
import { defineElement } from "@lordicon/element";

// Component
import { SigninComponent } from './signin/signin.component';
import { SignUpComponent } from './signup/signup.component';
import { LogoutComponent } from './logout/logout.component';
import { LockScreenComponent } from './lockscreen/lockscreen.component';
import { PassCreateComponent } from './pass-create/pass-create.component';
import { PassResetComponent } from './pass-reset/pass-reset.component';
import { SuccessMsgComponent } from './success-msg/success-msg.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [
    SigninComponent,
    SignUpComponent,
    LogoutComponent,
    LockScreenComponent,
    PassCreateComponent,
    PassResetComponent,
    SuccessMsgComponent
  ],
  imports: [
    CommonModule,
    NgbCarouselModule,
    ReactiveFormsModule,
    FormsModule,
    NgOtpInputModule,
    AuthRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AuthModule {
  constructor() {
    defineElement();
  }
}
