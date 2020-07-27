import { Component, OnInit } from '@angular/core';
import { DirectorService } from "./../director.service";
import { ToastMsgService } from "app/toastMsg.service";
@Component({
  selector: 'app-serving-board',
  templateUrl: './serving-board.component.html',
  styleUrls: ['./serving-board.component.scss']
})
export class ServingBoardComponent implements OnInit {

  constructor(public directorSrvc: DirectorService,
    private toastr: ToastMsgService) { }

    servingBoardMembers: any = [];

    ngOnInit() {
      this.getServingBoard();
    }
  
    getServingBoard(){
      this.directorSrvc.getServingBoardMember().subscribe(
        (res) => {
          console.log("servingBoardMembers", res);
          this.servingBoardMembers = res;
        },
        (err) => {
          console.log("servingBoardMembers", err);
        }
      )

}
}