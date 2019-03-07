import { LoginService } from './login/login.service';
import { Injectable } from '@angular/core';
import { CanLoad, Route } from '@angular/router';

@Injectable()
export class LoggedInGuard implements CanLoad {

constructor(private loginService: LoginService) {}

    canLoad(route: Route): boolean {
        const loggIn = this.loginService.isLoggedIn();
        if (!loggIn) {
            this.loginService.handleLogin(`/${route.path}`);
        }
        return loggIn;
    }
}
