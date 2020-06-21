import { UserProfilePageComponent } from "./user-profile/user-profile-page.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FullPagesRoutingModule } from "./full-pages-routing.module";

import { FullLayoutPageComponent } from "./full-layout-page.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, FullPagesRoutingModule, ReactiveFormsModule],
  declarations: [FullLayoutPageComponent, UserProfilePageComponent],
})
export class FullPagesModule {}
