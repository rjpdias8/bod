import { DirectorService } from "./../director.service";
import { Component, OnInit, ViewChild, Input } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ToastMsgService } from "app/toastMsg.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-become-director",
  templateUrl: "./become-director.component.html",
  styleUrls: ["./become-director.component.scss"],
})
export class BecomeDirectorComponent implements OnInit {
  areaList: Object;
  @Input() editFormData;
  @ViewChild("f", { static: false }) BecomeDirectorForm: NgForm;

  constructor(
    public directorSrvc: DirectorService,
    private toastr: ToastMsgService,
    private router: Router
  ) {}

  ngOnInit() {
    // this.editFormData ? this.fillData() : null;
    this.getAreaFields();
  }
  fillData() {
    console.log(this.editFormData);
    this.BecomeDirectorForm.value.exp = this.editFormData.exp;
    // console.log()
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

  // On submit button click
  onSubmit() {
    console.log(this.BecomeDirectorForm.value);
    let body = this.BecomeDirectorForm.value;
    console.log(body);
    this.directorSrvc.userBecomeDirector(body).subscribe(
      (res) => {
        console.log("becomeDirector", res);
        this.toastr.typeSuccess();

        this.router.navigate(["/director"]);
      },
      (err) => {
        this.toastr.typeError();
        console.log("becomeDirector", err);
      }
    );
  }
}
