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
    inviteeList: any = [];
    area: any = '';
    email: any = '';
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

  getDirectorByArea(){

    this.directorSrvc.searchDirectorByArea(this.area).subscribe(
      (res) => {
        console.log("directors", res);
        this.inviteeList = res;
      },
      (err) => {
        console.log("directors", err);
      }
    );
  }

  sendEmailInvitation(){
    let body = {area: this.area,invited_email: this.email};
    this.directorSrvc.sendEmailInvitation(body).subscribe(
      (res) => {
        console.log("send email invitation", res);
        if(res['status']=='active'){
          this.toastr.typeSuccess('Email invitation sent successfully!!');
        }
        
      },
      (err) => {
        this.toastr.typeError(err.error);
        console.log("send email invitation", err);
      }
    ); 
  }

  sendInvitation(userId){
    let body = {area: this.area,invited: userId};
    this.directorSrvc.sendInvitation(body).subscribe(
      (res) => {
        console.log("send  invitation", res);
        if(res['status']=='active'){
          this.toastr.typeSuccess('Invitation sent successfully!!');
        }
      },
      (err) => {
        this.toastr.typeError(err.error);
        console.log("send invitation", err);
      }
    ); 
  }
}
