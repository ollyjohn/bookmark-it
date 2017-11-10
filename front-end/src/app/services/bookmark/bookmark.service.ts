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
    }

    /**
     * Create a new bookmark
     * @param {Object} bookmark - the bookmark to create
     */
    public createBookmark = ( bookmark: Bookmark ): any => {
        const headers = new Headers();
        headers.append( 'Content-Type', 'application/json' );

        return this._http.post( this.prepareEndpoint( 'bookmarks' ), bookmark, { headers: headers } );
    }

    /**
     * Delete a bookmark
     * @param {string} bookmarkId
     */
    public deleteBookmark = ( bookmarkId: string ): any => {
        const headers = new Headers();
        headers.append( 'Content-Type', 'application/json' );

        return this._http.delete( this.prepareEndpoint( `bookmarks/${bookmarkId}` ) );
    }

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
     * Call the API to fetch all bookmarks by a given creator
     * @param {string} creatorId - the creator's username
     */
    public getBookmarksByCreator = ( creatorId: string ): any => {
        const headers = new Headers();
        headers.append( 'Content-Type', 'application/json' );

        return this._http.get( this.prepareEndpoint( `bookmarks/creator/${creatorId}` ), { headers: headers } ).map( response => response.json() );
    }

    /**
     * Call the API to update a bookmark
     * @param {string} bookmarkId - the id of the bookmark to update
     * @param {Object} bookmark - the new content of the bookmark
     */
    public updateBookmark = ( bookmarkId: string, bookmark: any ): any => {
        const headers = new Headers();
        headers.append( 'Content-Type', 'application/json' );

        return this._http.put( this.prepareEndpoint( `bookmarks/${bookmarkId}` ), JSON.stringify(bookmark), { headers: headers } ).map( response => response.json() );
    }



}
