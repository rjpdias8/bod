import { Component, OnInit } from '@angular/core';
import { DirectorService } from "./../director.service";
import { ToastMsgService } from "app/toastMsg.service";

@Component({
  selector: 'app-send-invitation',
  templateUrl: './send-invitation.component.html',
  styleUrls: ['./send-invitation.component.scss']
})
export class SendInvitationComponent implements OnInit {

  constructor(  public directorSrvc: DirectorService,
    private toastr: ToastMsgService,) { }
    areaList: Object;
  ngOnInit() {
    this.getAreaFields();
  }

  getAreaFields() {
    this.directorSrvc.getAreaList().subscribe(
      (res) => {
        console.log("areaList", res);
        this.areaList = res;
      },
      (err) => {
        console.log("areaList", err);
      }
    );
  }
}
