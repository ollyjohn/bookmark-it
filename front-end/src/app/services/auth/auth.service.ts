import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthService {

	private development: boolean = false;
	private user: any;
	private token: string;

	constructor( private _http: Http, private _router: Router ) {
        this.development = environment.production;
	}

	/**
	 * Generate an endpoint depending on the environment
	 * @param {string} url
	 */
	private prepareEndpoint = ( url: string ) => {
		return ( this.development ? url : `http://localhost:8080/${url}` );
	};

	/**
	 * Fetch the auth token from local storage
	 */
	private loadToken = () => {
		this.token = localStorage.getItem( 'token' );
	}

	/**
	 * Create a new user
	 * @param {User} user
	 */
	public registerUser = ( user: User ): any => {
		const headers = new Headers();
		headers.append( 'Content-Type', 'application/json' );
		const endpoint = this.prepareEndpoint( 'users/register' );

		return this._http.post( endpoint, user, { headers: headers } ).map( response => response.json() );
	};

	/**
	 * Attempt to log the user in
	 * @param {User} user
	 */
	public authenticate = ( user: { username: string, password: string} ): any => {
		const headers = new Headers();
		headers.append( 'Content-Type', 'application/json' );
		const endpoint = this.prepareEndpoint( 'users/auth' );
		return this._http.post( endpoint, user, { headers: headers } ).map( response => response.json() );
	};

	/**
	 * Fetch the profile information for the stored token
	 */
	public getProfile = () => {
		const headers = new Headers();
		this.loadToken();
		headers.append( 'Content-Type', 'application/json' );
		headers.append( 'Authorization', this.token );
		const endpoint = this.prepareEndpoint( 'users/profile' );

		return this._http.get( endpoint, { headers: headers } ).map( response => response.json() );
	};

	/**
	 * Store the user's auth token & information in local storage
	 * @param {string} token
	 * @param {User} user
	 */
	public store = ( token: string, user: User ) => {
		localStorage.setItem( 'token', token );
		localStorage.setItem( 'user', JSON.stringify( user ) );
		this.token = token;
		this.user = user;
	};

	/**
	 * Check for an active authentication token
	 */
	public isAuthenticated = (): boolean => {
		return tokenNotExpired( 'accessToken' );
	};

	/**
	 * Clear our the information stored against the user
	 */
	public logOut = (): void => {
		delete this.token;
		delete this.user;
        localStorage.clear();
        this._router.navigate( [ '/login' ] );
	};

}
