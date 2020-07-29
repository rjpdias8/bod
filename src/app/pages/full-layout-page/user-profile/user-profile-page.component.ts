import { UserService } from "./../../../shared/services/user.service";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { ToastMsgService } from "app/toastMsg.service";

@Component({
  selector: "app-user-profile-page",
  templateUrl: "./user-profile-page.component.html",
  styleUrls: ["./user-profile-page.component.scss"],
})
export class UserProfilePageComponent implements OnInit {
  //Variable Declaration
  currentPage: string = "About";
  userInfoForm: FormGroup;
  isEditMode: boolean = false;
  profile: any;

  constructor(
    private userService: UserService,
    private toastr: ToastMsgService
  ) {}

  ngOnInit() {
    this.userInfoForm = new FormGroup({
      linkedin: new FormControl(null),
      serve_on_board: new FormControl(false),
      summary: new FormControl(null),
      areas_of_expertise: new FormControl(null),
      location: new FormControl(null),
      country: new FormControl(null),
      technical_skill_area: new FormControl(null),
      experience: new FormControl(null),
      current_company: new FormControl(null),
      previous_company: new FormControl(null),
    });

    this.getUserProfile();
  }

  onSubmit(form: FormGroup) {
    console.log(form.value); // true or false
    let body = form.value;
    body['username']= this.profile['username'];
    body['name']= this.profile['name'];
    this.userService.updateUserProfile(body).subscribe(
      (res) => {
        console.log(res);
        this.getUserProfile();
        this.isEditMode = false;
        this.toastr.typeSuccess('Profile updated successfully!!')
      },
      (err) => {
        this.toastr.typeError(err.error);

        this.isEditMode = false;
      }
    );
  }

  showPage(page: string) {
    this.currentPage = page;
  }

  getUserProfile() {
    this.userService.getUserProfile().subscribe(
      (data) => {
        this.profile = data;
        console.log(this.profile);
        this.userInfoForm.patchValue(this.profile);
      },
      (err) => console.log(err)
    );
  }
}
