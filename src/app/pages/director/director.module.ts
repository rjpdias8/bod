import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { DirectorRoutingModule } from "./director-routing.module";
import { DirectorHomeComponent } from "./director-home/director-home.component";
import { BecomeDirectorComponent } from "./become-director/become-director.component";
import { SendInvitationComponent } from './send-invitation/send-invitation.component';
import { InvitationsComponent } from './invitations/invitations.component';
import { MyBoardComponent } from './my-board/my-board.component';
import { ServingBoardComponent } from './serving-board/serving-board.component';
import {SortableColumnComponent} from './sortable-column/sortable-column.component';
import {SortableTableDirective} from './sortable-table/sortable-table.directive';
@NgModule({
  declarations: [DirectorHomeComponent, BecomeDirectorComponent, SendInvitationComponent,
     InvitationsComponent, MyBoardComponent, ServingBoardComponent, SortableColumnComponent
    ,SortableTableDirective
  ],
  imports: [CommonModule, DirectorRoutingModule, FormsModule,   NgbModule.forRoot(),],
})
export class DirectorModule {}
