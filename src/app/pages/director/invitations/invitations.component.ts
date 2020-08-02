import { Component, OnInit } from '@angular/core';
import { DirectorService } from "./../director.service";
import { ToastMsgService } from "app/toastMsg.service";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-invitations',
  templateUrl: './invitations.component.html',
  styleUrls: ['./invitations.component.scss']
})
export class InvitationsComponent implements OnInit {

  constructor(public directorSrvc: DirectorService,
    private toastr: ToastMsgService,
    private modalService: NgbModal) { }
  selected: any = 'Received'
  // receivedInvitations: any = [{area_name: 'Area1'},{area_name: 'Area2'}];
  // sentInvitations: any = [{area_name: 'Area1'},{area_name: 'Area2'}];

  filterExpand: boolean = true;
  statusList: any = ['Any','active', 'accepted', 'rejected'];
  receivedInvitations: any = [];
  sentInvitations: any = [];
  duplicateSentData: any = [];
  duplicateReceivedData: any = [];
  areaList: any = [];
  status: any = 'any';
  area: any = 'any';
  pageSize: number =10;
  page: number =1;
  ngOnInit() {
    this.getAreaFields();
    this.getReceivedInvitation();
    this.getSentInvitation();
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

  getSentInvitation(){
    this.directorSrvc.getSentInvitation().subscribe(
      (res) => {
        console.log("sentInvitations", res);
        this.sentInvitations = res;
        this.duplicateSentData =res;
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
        this.duplicateReceivedData = res;
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

  userDetails: any;
  viewDetails(data, longContent){
    this.userDetails = data;
    this.openScrollableContent(longContent);

  }

  openScrollableContent(longContent) {
    this.modalService.open(longContent);
  }

    
  onSortedReceivedInvitation(eve){
    let column = eve.sortColumn;
    let list =column.split(".");
    let value ;
   if(list.length==1){
    value = this.receivedInvitations[0][list[0]];
   }else{
    value = this.receivedInvitations[0][list[0]][list[1]];
   }
   let type = isNaN(value)
    if(type){
      if(eve.sortDirection=='asc'){
        this.receivedInvitations.sort(function(a, b){
          if(list.length==1){
            var textA = a[list[0]].toUpperCase();
            var textB = b[list[0]].toUpperCase();
           }else{
            var textA = a[list[0]][list[1]].toUpperCase();
            var textB = b[list[0]][list[1]].toUpperCase();
           }
         
         return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        })
      }else{
        this.receivedInvitations.sort(function(a, b){
          if(list.length==1){
            var textA = a[list[0]].toUpperCase();
            var textB = b[list[0]].toUpperCase();
           }else{
            var textA = a[list[0]][list[1]].toUpperCase();
            var textB = b[list[0]][list[1]].toUpperCase();
           }
         return (textA > textB) ? -1 : (textA < textB) ? 1 : 0;
        })
      }
    }else{
    if(eve.sortDirection=='asc'){
      this.receivedInvitations.sort(function(a, b){
        return a[eve.sortColumn]-b[eve.sortColumn]
      })
    }else{
      this.receivedInvitations.sort(function(a, b){
        return b[eve.sortColumn]-a[eve.sortColumn]
      })
    }
  }
    this.page =1;
  }

  onSortedSentInvitation(eve){
    let column = eve.sortColumn;
    let list =column.split(".");
    let value ;
   if(list.length==1){
    value = this.sentInvitations[0][list[0]];
   }else{
    value = this.sentInvitations[0][list[0]][list[1]];
   }
   let type = isNaN(value)
    if(type){
      if(eve.sortDirection=='asc'){
        this.sentInvitations.sort(function(a, b){
          if(list.length==1){
            var textA = a[list[0]].toUpperCase();
            var textB = b[list[0]].toUpperCase();
           }else{
            var textA = a[list[0]][list[1]].toUpperCase();
            var textB = b[list[0]][list[1]].toUpperCase();
           }
         
         return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        })
      }else{
        this.sentInvitations.sort(function(a, b){
          if(list.length==1){
            var textA = a[list[0]].toUpperCase();
            var textB = b[list[0]].toUpperCase();
           }else{
            var textA = a[list[0]][list[1]].toUpperCase();
            var textB = b[list[0]][list[1]].toUpperCase();
           }
         return (textA > textB) ? -1 : (textA < textB) ? 1 : 0;
        })
      }
    }else{
    if(eve.sortDirection=='asc'){
      this.sentInvitations.sort(function(a, b){
        return a[eve.sortColumn]-b[eve.sortColumn]
      })
    }else{
      this.sentInvitations.sort(function(a, b){
        return b[eve.sortColumn]-a[eve.sortColumn]
      })
    }
  }
    this.page =1;
  }

  filterInvitation(type, filterBy, filterValue, searchType){
    let list =filterBy.split(".");
    console.log(filterBy);
    console.log(filterValue)
    console.log('value:'+filterValue.value);
    if(type=='Sent'){
      this.sentInvitations = this.duplicateSentData.filter((item)=>{
        if(filterValue.value=='Any' || filterValue.value=='undefined'){
          return true;
        }else{
       
        if(list.length==1){
          if(item[list[0]]!=null){
          return item[list[0]] == filterValue.value;
          }
         }else{
        
          if(searchType=='text'){
            if(item[list[0]][list[1]]!=null){
          return item[list[0]][list[1]].toLowerCase().includes(filterValue.value.toLowerCase());
            }
          }else{
            if(item[list[0]][list[1]]!=null){
            return item[list[0]][list[1]] == filterValue.value;
            }
          }
         }
        }
      })
    }else if(type=='Received'){
      this.receivedInvitations = this.duplicateReceivedData.filter((item)=>{
        if(filterValue.value=='Any'  || filterValue.value=='undefined'){
          return true;
        }else{
          if(list.length==1){
            if(item[list[0]]!=null){
            return item[list[0]] == filterValue.value;
            }
           }else{
            if(searchType=='text'){
              if(item[list[0]][list[1]]!=null){
              return item[list[0]][list[1]].toLowerCase().includes(filterValue.value.toLowerCase());
              }
              }else{
                if(item[list[0]][list[1]]!=null){
                return item[list[0]][list[1]] == filterValue.value;
                }
              }
           }
        }
      })
    }
  }

}
