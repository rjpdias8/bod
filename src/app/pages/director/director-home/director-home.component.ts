import { Component, OnInit } from "@angular/core";
import { DirectorService } from "../director.service";
import { ToastMsgService } from "app/toastMsg.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-director-home",
  templateUrl: "./director-home.component.html",
  styleUrls: ["./director-home.component.scss"],
})
export class DirectorHomeComponent implements OnInit {
  myActiveDirectoLists: Object;
  showEditForm: boolean;
  editFormData: { areaId: any; description: any; exp: any };
  constructor(
    public directorSrvc: DirectorService,
    private toastr: ToastMsgService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getMyActiveDirectoLists();
  }
  getMyActiveDirectoLists() {
    this.directorSrvc.getActiveDirectorList().subscribe(
      (res) => {
        console.log("myActiveDirectoLists", res);
        this.myActiveDirectoLists = res;
      },
      (err) => {
        console.log("myActiveDirectoLists", err);
        this.myActiveDirectoLists = err;
        this.toastr.typeError(err.error);
      }
    );
  }

  goToEditMyActiveDirectors(directorIndex) {
    this.editFormData = {
      areaId: this.myActiveDirectoLists[directorIndex].area,
      description: this.myActiveDirectoLists[directorIndex].description,
      exp: this.myActiveDirectoLists[directorIndex].exp,
    };
    console.log(this.editFormData);
    this.showEditForm = true;
    // this.router.navigate(["/director/become-director"]);
  }

  goToEditDirector(id){
    this.router.navigate(['/director/become-director'],{ queryParams: { id:id}})
  }

  deleteDirector(id){
    this.directorSrvc.deleteDirector(id).subscribe(
      (res) => {
        this.toastr.typeSuccess();
        this.getMyActiveDirectoLists();
      },
      (err) => {
        console.log("myActiveDirectoLists", err);
        this.toastr.typeError(err.error);
      }
    );
  }
}
