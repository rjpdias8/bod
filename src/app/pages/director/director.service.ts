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

  constructor(private http: HttpClient, private apiurl: Api) {}
}
