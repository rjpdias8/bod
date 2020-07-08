import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";
import { AuthService } from "app/shared/services/auth.service";
import { ToastMsgService } from "app/toastMsg.service";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  constructor( private auth: AuthService, private toastr: ToastMsgService) { }
  @ViewChild("changePassword", { static: false }) changePasswordForm: NgForm;

  ngOnInit() {
  }

  onSubmit() {
    let body = this.changePasswordForm.value;
    let password = body.password;
    let new_password = body.new_password;
    if(password==''){
      this.toastr.typeError('Please enter Old Password');
    }else if(new_password==''){
      this.toastr.typeError('Please enter New Password');
    }else{
    this.auth.changePassword(body).subscribe(
      res => {
        console.log('password changed successfully!!!');
        this.toastr.typeSuccess();
      },
      err => {
        console.log(err);
        this.toastr.typeError(err.error);
      }
    );
    }
  }


}
