import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Component Pages
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  {
    path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'errors', loadChildren: () => import('./auth/errors/errors.module').then(m => m.ErrorsModule)
  },
  {
    path: "register", component: RegisterComponent
  },
  {
    path: "login", component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
