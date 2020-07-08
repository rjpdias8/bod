import { UserProfilePageComponent } from "./user-profile/user-profile-page.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { FullPagesRoutingModule } from "./full-pages-routing.module";

import { FullLayoutPageComponent } from "./full-layout-page.component";
import { ReactiveFormsModule } from "@angular/forms";

import { ChangePasswordComponent } from './change-password/change-password.component';

@NgModule({
  imports: [CommonModule, FullPagesRoutingModule, FormsModule,ReactiveFormsModule],
  declarations: [FullLayoutPageComponent, UserProfilePageComponent, ChangePasswordComponent],
})
export class FullPagesModule {}
