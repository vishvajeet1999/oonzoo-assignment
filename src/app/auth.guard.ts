import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import {  Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { LoggedinService } from './logged-in.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private loggedInService: LoggedinService, 
    private router: Router
  ) {}

  canActivate(next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let url: string = state.url;
    console.log(url)
    return this.loggedInService.isLoggedIn.pipe(
      take(1),
      map(res => {console.log(res) 
        if(res){

          return res
        }
        return this.router.createUrlTree([''])
      })
    );
  }

  checkLogin(url: string): Observable<boolean> {
    /* if (this.loggedInService.isLoggedIn) {
      return true;
    } else {
      this.loggedInService.redirectUrl = url;
      return false;
    } */
    return this.loggedInService.isLoggedIn$;
  }
}
