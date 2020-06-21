import { DirectorHomeComponent } from "./director-home/director-home.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BecomeDirectorComponent } from "./become-director/become-director.component";

const routes: Routes = [
  {
    path: "",
    component: DirectorHomeComponent,
    data: {
      title: "",
    },
  },
  {
    path: "become-director",
    component: BecomeDirectorComponent,
    data: {
      title: "",
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DirectorRoutingModule {}
