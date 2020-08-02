import { Component, OnInit } from '@angular/core';
import { DirectorService } from "./../director.service";
import { ToastMsgService } from "app/toastMsg.service";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-my-board',
  templateUrl: './my-board.component.html',
  styleUrls: ['./my-board.component.scss']
})
export class MyBoardComponent implements OnInit {

  constructor(public directorSrvc: DirectorService,
    private toastr: ToastMsgService,
    private modalService: NgbModal) { }
    myBoardMembers: any = [];

  ngOnInit() {
    this.getMyBoard();
  }

  getMyBoard(){
    this.directorSrvc.getMyoardMembers().subscribe(
      (res) => {
        console.log("myBoard", res);
        this.myBoardMembers = res;
      },
      (err) => {
        console.log("myBoard", err);
      }
    );
  }

  userDetails: any;
  viewDetails(data, content){
    this.userDetails = data;
    this.modalService.open(content);

  }

}
