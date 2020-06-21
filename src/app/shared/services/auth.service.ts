import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Api } from "../api/api-url";
import { map } from "rxjs/operators";
import * as AWS from "aws-sdk";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  client = new AWS.CognitoIdentityServiceProvider({
    region: "us-east-2",
    accessKeyId: "AKIAVLOG2AK2R6ZNE3RO",
    secretAccessKey: "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",
  });
  constructor(private http: HttpClient, private apiurl: Api) {}

  registerUser(body) {
    return this.http.post(this.apiurl.baseUrl + this.apiurl.registerUrl, body);
    // return new Promise((resolve, reject) => {
    //   this.client.signUp(
    //     {
    //       ClientId: "5lpldd1uvc6fve9bi61v4ue03n",
    //       Username: body.email,
    //       Password: body.password,
    //     },
    //     (err, data) => {
    //       if (err) reject(err);
    //       resolve(data);
    //     }
    //   );
    // });
  }

  login(body) {
    return this.http
      .post(this.apiurl.baseUrl + this.apiurl.loginUrl, body)
      .pipe(map((res) => this.storeLoginData(res["token"])));

    // return new Promise((resolve, reject) => {
    //   this.client.initiateAuth(
    //     {
    //       AuthFlow: "USER_PASSWORD_AUTH",
    //       ClientId: "5lpldd1uvc6fve9bi61v4ue03n",
    //       AuthParameters: {
    //         USERNAME: body.username,
    //         PASSWORD: body.password,
    //       },
    //     },
    //     (err, data) => {
    //       if (err) reject(err);
    //       this.storeLoginData(data.AuthenticationResult);
    //       resolve(data);
    //     }
    //   );
    // });
  }

  logout() {
    localStorage.removeItem("token");
    location.reload();
  }

  storeLoginData(token: any): any {
    localStorage.setItem("token", token);
  }

  isLoggedIn(): boolean {
    if (localStorage.getItem("token")) return true;
    else return false;
  }

  forgetPassword(email) {
    return this.http.get(
      this.apiurl.baseUrl + this.apiurl.forgetPassword + email
    );
  }

  forgetPassword2(body) {
    return this.http.post(
      this.apiurl.baseUrl + this.apiurl.forgetPassword2,
      body
    );
  }
}
