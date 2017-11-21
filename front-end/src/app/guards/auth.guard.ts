import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor( private _authService: AuthService, private _router: Router ) { }

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const url = state.url;

        // login, authenticated -> bookmarks
        if( url === '/login' && this._authService.isAuthenticated() ) {
            console.log( 'LOGGED IN. REDIRECTING' );
            this._router.navigate( [ '/bookmarks' ] );
            return true;
        }
        // bookmark, authenticated -> bookmarks
        if( url === '/bookmarks' && this._authService.isAuthenticated() ) {
            console.log( 'LOGGED IN. ALLOWED ROUTE' );
            return true;
        }
        // not login, not authenticated -> login
        if (url !== '/login' && !this._authService.isAuthenticated() ) {
            console.log( 'NOT LOGGED IN.  REDIRECTING' );
            this._router.navigate( [ '/login' ] );
            return true;
        }

        // login, not authenticated -> login
        if( url === '/login' && !this._authService.isAuthenticated() ) {
            console.log( 'NOT LOGGED IN.  ALLOWED ROUTE' );
            return true;
        }
    }
}
