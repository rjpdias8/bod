import { Injectable, Injector } from "@angular/core";
import { HttpInterceptor } from "@angular/common/http";

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
  constructor() {}
  token: any;

  intercept(req, next) {
    this.token = localStorage.getItem("token") || null;
    if (!this.token) {
      return next.handle(req);
    }
    const tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Token ${this.token}`
      }
    });
    return next.handle(tokenizedReq);
  }
}
