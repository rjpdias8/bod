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
    console.log(1);
    // this.registerForm.reset();
    console.log(this.registerForm);
    let body = this.registerForm.form.value;
    this.auth.registerUser(body).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(["login"], { relativeTo: this.route.parent });
      },
      (err) => {
        this.toastr.typeError();
        console.log(err);
      }
    );
  }
}
