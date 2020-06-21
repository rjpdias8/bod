import { UserProfilePageComponent } from "./user-profile/user-profile-page.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { FullLayoutPageComponent } from "app/pages/full-layout-page/full-layout-page.component";

const routes: Routes = [
  {
    path: "",
    component: FullLayoutPageComponent,
    data: {
      title: "Full Layout Page"
    }
  },
  {
    path: "profile",
    component: UserProfilePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FullPagesRoutingModule {}
