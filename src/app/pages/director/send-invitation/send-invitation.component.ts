import { Component, OnInit } from '@angular/core';
import { DirectorService } from "./../director.service";
import { ToastMsgService } from "app/toastMsg.service";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-send-invitation',
  templateUrl: './send-invitation.component.html',
  styleUrls: ['./send-invitation.component.scss']
})
export class SendInvitationComponent implements OnInit {

  constructor(  public directorSrvc: DirectorService,
    private toastr: ToastMsgService,
    private modalService: NgbModal) { }
    filterExpand: boolean = true;
    areaList: Object;
    inviteeList: any = [];
    duplicateInviteeList: any = [];
    area: any = '';
    email: any = '';
    pageSize: number =3;
    page: number =1;
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
        this.duplicateInviteeList =res;
        this.page =1;
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

  
  onSorted(eve){
    let column = eve.sortColumn;
    let list =column.split(".");
    let value ;
   if(list.length==1){
    value = this.inviteeList[0][list[0]];
   }else{
    value = this.inviteeList[0][list[0]][list[1]];
   }
   let type = isNaN(value)
    if(type){
      if(eve.sortDirection=='asc'){
        this.inviteeList.sort(function(a, b){
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
        this.inviteeList.sort(function(a, b){
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
      this.inviteeList.sort(function(a, b){
        return a[eve.sortColumn]-b[eve.sortColumn]
      })
    }else{
      this.inviteeList.sort(function(a, b){
        return b[eve.sortColumn]-a[eve.sortColumn]
      })
    }
  }
    this.page =1;
  }

  
  filterInvitation(filterBy, filterValue, searchType){
    let list =filterBy.split(".");
    console.log(filterBy);
    console.log(filterValue)
    console.log('value:'+filterValue.value);
      this.inviteeList = this.duplicateInviteeList.filter((item)=>{
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
    
  }

  userDetails: any;
  viewDetails(data, longContent){
    this.userDetails = data;
    this.modalService.open(longContent);

  }
 
}
