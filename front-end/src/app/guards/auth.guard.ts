import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor( private _authService: AuthService ) { }

    /**
     * Determine whether or not the user should be allowed to access the URL they're attempting
     */
	canActivate( ) {
        return this._authService.isAuthenticated();
    }
}
