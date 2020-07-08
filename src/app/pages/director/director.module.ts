import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DirectorRoutingModule } from "./director-routing.module";
import { DirectorHomeComponent } from "./director-home/director-home.component";
import { BecomeDirectorComponent } from "./become-director/become-director.component";
import { SendInvitationComponent } from './send-invitation/send-invitation.component';

@NgModule({
  declarations: [DirectorHomeComponent, BecomeDirectorComponent, SendInvitationComponent],
  imports: [CommonModule, DirectorRoutingModule, FormsModule],
})
export class DirectorModule {}
