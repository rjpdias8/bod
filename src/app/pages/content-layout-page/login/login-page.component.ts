// import { ToastMsgService } from "./../../../toastMsg.service";
import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from "app/shared/services/auth.service";
import { ToastMsgService } from "app/toastMsg.service";

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.scss"],
})
export class LoginPageComponent {
  @ViewChild("f", { static: false }) loginForm: NgForm;

  constructor(
    private router: Router,
    private auth: AuthService,
    private toastr: ToastMsgService,

    private route: ActivatedRoute
  ) {}

  // On submit button click
  onSubmit() {
    // this.loginForm.reset();
    // this.toast.success("hello");
    console.log(this.loginForm.value);
    let body = this.loginForm.value;
    this.auth.login(body).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate([""]);
      },
      (err) => {
        this.toastr.typeError();
        console.log(err);
      }
    );
  }
  // On Forgot password link click
  onForgotPassword() {
    this.router.navigate(["forgotpassword"], { relativeTo: this.route.parent });
  }
  // On registration link click
  onRegister() {
    this.router.navigate(["register"], { relativeTo: this.route.parent });
  }
}
