import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Api } from "app/shared/api/api-url";

@Injectable({
  providedIn: "root",
})
export class DirectorService {
  /* 
  get the areas where user can become director
  */
  getAreaList() {
    return this.http.get(this.apiurl.baseUrl + this.apiurl.areaList);
  }

  /* 
  allows the user to become director in given field once
  */
  userBecomeDirector(body: any) {
    return this.http.post(this.apiurl.baseUrl + this.apiurl.userDirector, body);
  }

  /* 
  gives the list of areas where user is director 
  */
  getActiveDirectorList() {
    return this.http.get(this.apiurl.baseUrl + this.apiurl.userDirector);
  }

  //get director by id
  getDirectorById(id){
    return this.http.get(this.apiurl.baseUrl + this.apiurl.userDirector+ '/'+ id);
  }
  
  //delete director by id
  deleteDirector(id){
    return this.http.delete(this.apiurl.baseUrl + this.apiurl.userDirector+ '/'+ id);
  }

  //send invitation
  sendInvitation(body: any) {
    return this.http.post(this.apiurl.baseUrl + this.apiurl.sendInvitationUrl, body);
  }

  // get sent invitations
  getSentInvitation() {
    return this.http.get(this.apiurl.baseUrl + this.apiurl.sendInvitationUrl);
  }

  //receive invitation
  receiveInvitation(){
    return this.http.get(this.apiurl.baseUrl + this.apiurl.receiveInvitationUrl);
  }

  //send email invitation
  sendEmailInvitation(body: any) {
    return this.http.post(this.apiurl.baseUrl + this.apiurl.sendEmailInvitationUrl, body);
  }

  //search director by area
  searchDirectorByArea(areaId) {
    return this.http.get(this.apiurl.baseUrl + this.apiurl.searchDirectorUrl+'/' +areaId);
  }

  //invitation desicion
  invitationDescison(body: any) {
    return this.http.post(this.apiurl.baseUrl + this.apiurl.invitationDescionUrl, body);
  }

  //get my board members
  getMyoardMembers() {
    return this.http.get(this.apiurl.baseUrl + this.apiurl.myBoardMembersUrl);
  }

   //get list of serving board member
   getServingBoardMember() {
    return this.http.get(this.apiurl.baseUrl + this.apiurl.iamBoardMemeberUrl);
  }


  constructor(private http: HttpClient, private apiurl: Api) {}
}
