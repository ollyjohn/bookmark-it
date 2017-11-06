import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { User } from '../../models/user';
import { JwtHelper } from 'angular2-jwt';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    private login = {
        username: '',
        password: '' 
    };
    private register = {
        password: {
            a: '',
            b: ''
        },
        username: '',
        forename: '',
        surname:  ''
    };
    public registering: boolean = false;
    public valid: boolean = true;
    public message: string = '';

    constructor( private _auth: AuthService, private _router: Router, private _jwt: JwtHelper ) {}

    /**
     * Submit the form
     */
    onSubmit(): void {
        let submitted: any;
        !this.registering ? submitted = this.login : submitted = this.register;
        !this.registering ? this.signIn( this.login ) : this.signUp( this.register );
    };

    /**
     * Switch which form is displayed
     */
    public toggleForm = (): void => {
        this.registering = !this.registering;
    };

    /**
     * Sign in to the app
     */
    private signIn = ( data: { username: string, password: string} ) => {
        this._auth.authenticate( data ).subscribe( 
            ( response ) => { 
                // on good response
                if ( response.success ) {
                    localStorage.clear();
                    localStorage.setItem( 'accessToken', response.token );
                    localStorage.setItem( 'userInfo', JSON.stringify( response.user ) );
                    this._router.navigate( [ '/bookmarks' ] );
                } 
                // on bad response
                else {
                    this.valid = false;
                    this.message = response.msg;
                }
            }
        );
    }

    /**
     * Sign up for the app
     */
    private signUp = ( data: { password: any, username: string, forename: string, surname: string } ) => {
        console.log( data );
        if ( data.password.a === data.password.b ) {
            this.valid = true;
            this.message = '';
            data.password = data.password.a;
            this._auth.registerUser( data ).subscribe(
                ( response ) => {
                    if( response.success ) {
                        this.toggleForm();
                        this.valid = true;
                        this.message = 'Account created!  Please sign in now'
                    } else {
                        this.valid = false;
                        this.message = response.message;
                        this.register.password = { a: '', b: '' };
                    }
                }
            );
        } else {
            this.valid = false;
            this.message = 'Passwords don\'t match';
        }
        
    }

}
