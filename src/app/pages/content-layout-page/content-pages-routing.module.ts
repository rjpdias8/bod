import { ForgotPasswordPageComponent } from "./forgot-password/forgot-password-page.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ContentLayoutPageComponent } from "./content-layout-page.component";
//self
import { LoginPageComponent } from "./login/login-page.component";
import { RegisterPageComponent } from "./register/register-page.component";

const routes: Routes = [
  {
    path: "",
    component: ContentLayoutPageComponent,
    data: {
      title: "Content Layout page"
    }
  },
  {
    path: "login",
    component: LoginPageComponent
  },
  {
    path: "register",
    component: RegisterPageComponent
  },
  {
    path: "forget-password",
    component: ForgotPasswordPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentPagesRoutingModule {}
