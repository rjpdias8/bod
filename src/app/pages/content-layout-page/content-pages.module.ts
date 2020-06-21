import { ForgotPasswordPageComponent } from "./forgot-password/forgot-password-page.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { ContentPagesRoutingModule } from "./content-pages-routing.module";
import { ContentLayoutPageComponent } from "./content-layout-page.component";

//self
import { LoginPageComponent } from "./login/login-page.component";
import { RegisterPageComponent } from "./register/register-page.component";

@NgModule({
  imports: [CommonModule, ContentPagesRoutingModule, FormsModule],
  declarations: [
    ContentLayoutPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    ForgotPasswordPageComponent,
  ],
  providers: [],
})
export class ContentPagesModule {}
