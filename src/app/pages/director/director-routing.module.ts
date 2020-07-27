import { DirectorHomeComponent } from "./director-home/director-home.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BecomeDirectorComponent } from "./become-director/become-director.component";
import { SendInvitationComponent } from './send-invitation/send-invitation.component';
import { InvitationsComponent } from './invitations/invitations.component';
import { MyBoardComponent } from './my-board/my-board.component';
import { ServingBoardComponent } from './serving-board/serving-board.component';
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
  {
    path: "send-invitation",
    component: SendInvitationComponent,
    data: {
      title: "",
    },
  },
  {
    path: "invitations",
    component: InvitationsComponent,
    data: {
      title: "",
    },
  },
  {
    path: "my-board",
    component: MyBoardComponent,
    data: {
      title: "",
    },
  },
  {
    path: "serving-board",
    component: ServingBoardComponent,
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
