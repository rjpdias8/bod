import { Component, OnInit } from '@angular/core';
import { DirectorService } from "./../director.service";
import { ToastMsgService } from "app/toastMsg.service";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-serving-board',
  templateUrl: './serving-board.component.html',
  styleUrls: ['./serving-board.component.scss']
})
export class ServingBoardComponent implements OnInit {

  constructor(public directorSrvc: DirectorService,
    private toastr: ToastMsgService,
    private modalService: NgbModal) { }

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

userDetails: any;
viewDetails(data, content){
  this.userDetails = data;
  this.modalService.open(content);

}
}