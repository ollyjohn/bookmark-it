import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor( private _authService: AuthService, private _router: Router ) { }

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const url = JSON.stringify( state.url );
        console.log( url );

        console.log( url === '/dashboard' );

        // login, authenticated -> bookmarks
        // if( url === '/login' && this._authService.isAuthenticated() ) {
        //     this._router.navigate( [ '/bookmarks' ] );
        //     return true;
        // }
        // // bookmark, authenticated -> bookmarks
        // if( url === '/bookmarks' && this._authService.isAuthenticated() ) {
        //     return true;
        // }
        
        // if (url !== 'login' && !this._authService.isAuthenticated() ) {
        //     return true;
        // } else {
        //     return false
        // }

        return this._authService.isAuthenticated();
    }
}
