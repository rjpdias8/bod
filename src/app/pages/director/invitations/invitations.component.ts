import { Component, OnInit } from '@angular/core';
import { DirectorService } from "./../director.service";
import { ToastMsgService } from "app/toastMsg.service";
@Component({
  selector: 'app-invitations',
  templateUrl: './invitations.component.html',
  styleUrls: ['./invitations.component.scss']
})
export class InvitationsComponent implements OnInit {

  constructor(public directorSrvc: DirectorService,
    private toastr: ToastMsgService) { }
  selected: any = 'Received'
  // receivedInvitations: any = [{area_name: 'Area1'},{area_name: 'Area2'}];
  // sentInvitations: any = [{area_name: 'Area1'},{area_name: 'Area2'}];

  receivedInvitations: any = [];
  sentInvitations: any = [];
  ngOnInit() {
    this.getReceivedInvitation();
    this.getSentInvitation();
  }


  getSentInvitation(){
    this.directorSrvc.getSentInvitation().subscribe(
      (res) => {
        console.log("sentInvitations", res);
        this.sentInvitations = res;
      },
      (err) => {
        console.log("sentInvitations", err);
      }
    );
  }

  getReceivedInvitation(){
    this.directorSrvc.receiveInvitation().subscribe(
      (res) => {
        console.log("receivedInvitations", res);
        this.receivedInvitations = res;
      },
      (err) => {
        console.log("receivedInvitations", err);
      }
    );
  }

  invitationDescision(id, status){
    let body ={
      "status": status,
      "id": id
    }
    this.directorSrvc.invitationDescison(body).subscribe(
      (res) => {
        console.log("invitationDescison", res);
        this.toastr.typeSuccess('Invitation '+ status+'ed' +' successfully!!');
        this.getReceivedInvitation();
      },
      (err) => {
        console.log("invitationDescison", err);
        this.toastr.typeError(err.error);
      }
    );
  }

}
