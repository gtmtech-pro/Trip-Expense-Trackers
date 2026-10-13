import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastsContainer } from './login/toasts-container.component';

import { AccountRoutingModule } from './account-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    ToastsContainer
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AccountRoutingModule,
    NgbToastModule,
    AuthModule
  ]
})
export class AccountModule { }
