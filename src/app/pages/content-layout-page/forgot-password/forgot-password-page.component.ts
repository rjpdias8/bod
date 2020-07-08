import { Component, ViewChild, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from "app/shared/services/auth.service";
import { ToastMsgService } from "app/toastMsg.service";

@Component({
  selector: "app-forgot-password-page",
  templateUrl: "./forgot-password-page.component.html",
  styleUrls: ["./forgot-password-page.component.scss"]
})
export class ForgotPasswordPageComponent implements OnInit {
  @ViewChild("f", { static: false }) forogtPasswordForm: NgForm;
  @ViewChild("f2", { static: false }) forogtPasswordForm2: NgForm;
  token: any;

  ngOnInit(): void {
    this.token = this.route.snapshot.queryParamMap.get("token");
    console.log(this.token);
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private auth: AuthService,
    private toastr: ToastMsgService
  ) {}

  // On submit click, reset form fields --send mail form
  onSubmit() {
    let email = this.forogtPasswordForm.value.email;
    if(email==''){
      this.toastr.typeError('Please enter Email');
    }else{
    this.auth.forgetPassword(email).subscribe(
      res => {
        this.toastr.typeSuccess();
        this.forogtPasswordForm.reset();
      },
      err => {
        this.toastr.typeError(err.error);
        this.forogtPasswordForm.reset();
      }
    );
    }
  }

  // On submit click, reset form fields --send mail form
  onSubmit2() {
    let body = this.forogtPasswordForm2.value;
    body.token = this.token;
    let password = body.password;
    if(password==''){
      this.toastr.typeError('Please enter Password');
    }else{
    this.auth.forgetPassword2(body).subscribe(
      res => {
        this.toastr.typeSuccess();
        this.forogtPasswordForm2.reset();
        this.onLogin();
      },
      err => {
        this.toastr.typeError(err.error);
        this.forogtPasswordForm2.reset();
        this.onLogin();
      }
    );
    }
  }

  // On login link click
  onLogin() {
    this.router.navigate(["login"], { relativeTo: this.route.parent });
  }

  // On registration link click
  onRegister() {
    this.router.navigate(["register"], { relativeTo: this.route.parent });
  }
}
