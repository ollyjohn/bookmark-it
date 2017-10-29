import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from '../../../environments/environment';
import { Bookmark } from '../../models/bookmark';

@Injectable()
export class BookmarkService {

    constructor( private _http: Http ) {}

    /**
	 * Generate an endpoint depending on the environment
	 * @param {string} url
	 */
	private prepareEndpoint = ( url: string ) => {
		return ( environment.production ? url : `http://localhost:8080/${url}` );
	};

    /**
     * Call the API to get a bookmark
     * @param {string} bookmarkId - the id of the bookmark to fetch
     */
    public getBookmark = ( bookmarkId: string ): any => {
        const headers = new Headers();
        headers.append( 'Content-Type', 'application/json' );
        
        return this._http.get( this.prepareEndpoint( `bookmarks/${bookmarkId}` ), { headers: headers } ).map( response => response.json() );
    }

    /**
     * Call the API to get a bookmark
     * @param {string} bookmarkId - the id of the bookmark to update
     * @param {Object} bookmark - the new content of the bookmark
     */
    public updateBookmark = ( bookmarkId: string, bookmark: Bookmark ): any => {
        const headers = new Headers();
        headers.append( 'Content-Type', 'application/json' );
        
        return this._http.put( this.prepareEndpoint( `bookmarks/${bookmarkId}` ), bookmark, { headers: headers } ).map( response => response.json() );
    }



}
