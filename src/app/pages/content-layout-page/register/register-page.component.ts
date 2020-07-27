import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "app/shared/services/auth.service";
import { rejects } from "assert";
import { Router, ActivatedRoute } from "@angular/router";
import { ToastMsgService } from "app/toastMsg.service";

@Component({
  selector: "app-register-page",
  templateUrl: "./register-page.component.html",
  styleUrls: ["./register-page.component.scss"],
})
export class RegisterPageComponent {
  @ViewChild("f", { static: false }) registerForm: NgForm;

  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastMsgService
  ) {}

  //  On submit click, reset field value
  onSubmit() {
    let body = this.registerForm.form.value;
    console.log(body);
    if(body['name']==''){
      this.toastr.typeError('Please Enter Name');
    }else if(body['email']==''){
      this.toastr.typeError('Please Enter Email');
    }else if(body['password']==''){
      this.toastr.typeError('Please Enter Password');
    }else if(body['confirmPassword']==''){
      this.toastr.typeError('Please Enter Confirm Password');
    }else if(body['confirmPassword']!=body['password']){
      this.toastr.typeError('Both Password should be same');
    }else{
    this.auth.registerUser(body).subscribe(
      (res) => {
        console.log(res);
        this.toastr.typeSuccess('Signup Successfully!!');
        this.router.navigate(["login"], { relativeTo: this.route.parent });
      },
      (err) => {
        this.toastr.typeError(err.error);
        console.log(err);
      }
    );
    }
  }
}
