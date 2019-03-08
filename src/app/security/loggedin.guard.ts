import { LoginService } from './login/login.service';
import { Injectable } from '@angular/core';
import { CanLoad, Route, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';

@Injectable()
export class LoggedInGuard implements CanLoad, CanActivate {

constructor(private loginService: LoginService) {}

    checkAuthentication(path: string): boolean {
        const loggIn = this.loginService.isLoggedIn();
        if (!loggIn) {
            this.loginService.handleLogin(`/${path}`);
        }
        return loggIn;

    }

    canLoad(route: Route): boolean {
        return this.checkAuthentication(route.path);
    }

    canActivate(activatedRoute: ActivatedRouteSnapshot, routerStateSnapshot: RouterStateSnapshot): boolean {
        return this.checkAuthentication(activatedRoute.routeConfig.path);
    }
}
