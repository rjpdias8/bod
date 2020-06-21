import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Api } from "../api/api-url";
import * as AWS from "aws-sdk";

@Injectable({
  providedIn: "root",
})
export class UserService {
  client = new AWS.CognitoIdentityServiceProvider({
    region: "us-east-2",
    accessKeyId: "AKIAVLOG2AK2R6ZNE3RO",
    secretAccessKey: "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",
  });
  constructor(private http: HttpClient, private apiurl: Api) {}

  getUserProfile() {
    // let params = {
    //   AccessToken: localStorage.getItem("token"),
    // };
    // return new Promise((resolve, reject) => {
    //   this.client.getUser(params, (err, data) => {
    //     if (err) reject(err);
    //     resolve(data);
    //   });
    // });return this.http.get(

    return this.http.get(this.apiurl.baseUrl + this.apiurl.userProfile);
  }

  updateUserProfile(body) {
    return this.http.put(this.apiurl.baseUrl + this.apiurl.userProfile, body);
    //   body = Object.entries(body)
    //     .map(([key, value]) => ({
    //       Name: key,
    //       Value: value,
    //     }))
    //     .filter((data) => data.Value);
    //   let params = {
    //     AccessToken: localStorage.getItem("token"),
    //     UserAttributes: body,
    //   };
    //   return new Promise((resolve, reject) => {
    //     this.client.updateUserAttributes(params, (err, data) => {
    //       if (err) reject(err);
    //       resolve(data);
    //     });
    //   });
  }
}
