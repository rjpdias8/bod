import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { Injectable } from "@angular/core";
import { AuthService } from "../services/auth.service";
// import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // return this.authService.isAuthenticated();
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(["content-layout", "login"]);
      return false;
    }
  }
}
