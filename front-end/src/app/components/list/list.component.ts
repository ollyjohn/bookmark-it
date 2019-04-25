import { Component, OnInit } from '@angular/core';
import { Bookmark } from '../../models/bookmark';
import { BookmarkService } from '../../services/bookmark/bookmark.service';
import { UserService } from '../../services/user/user.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    public data: any[] = [];
    public bookmark = {
        _id: '',
        creator: this._userService.fetchUser().username,
        title: '',
        description: '',
        url: '',
        image: '',
        date_created: new Date(),
        tags: ''
    };
    public target: any = {
        _id: '',
        creator: this._userService.fetchUser().username,
        title: '',
        url: '',
        image: '',
        date_created: new Date(),
        tags: ''
    };
    public randImage = false;
    public randText = 'Get a random image';
    constructor( private _bookmarkService: BookmarkService, private _userService: UserService, private _http: Http ) { }

    ngOnInit() {
        this.getData();
    }

    /**
     * Generate a random index with which to call the unsplash API
     */
    public useRand = ( update: boolean = false ): void => {
        const r = Math.floor( Math.random() * 1080 ) + 1;
        this.randText = 'Fetching image...';

        this._http.get( `https://www.picsum.photos/500/250?image=${r}`)
            .subscribe(
                ( data ) => {
                    if ( data.status === 200 ) {
                        const url = `https://www.picsum.photos/500/250?image=${r}`;
                        if( update ) {
                            this.target.image = url;
                        } else {
                            this.bookmark.image = url
                        }
                        this.randText = 'Get a different image';
                    }
                }
            );
    }

    /**
     * Get all bookmarks for the active user
     */
    private getData = (): void => {
        const user = this._userService.fetchUser();
        this._bookmarkService.getBookmarksByCreator( user.username ).subscribe(
            ( data ) => {
                this.data = data.bookmarks;
            }
        )
    }

    /**
     * Set the target bookmark for any CRUD operations (mainly the U & D operations)
     * @param {string} bookmarkId - the bookmark to target
     */
    public setTarget = ( bookmark: any ): void => {
        let tmp = JSON.stringify( bookmark );
        this.target = JSON.parse( tmp );
        this.target.tags = this.target.tags.join( ', ' );
    }

    public goTo = ( url: string ): void => {
        window.location.href = url;
    }

    /**
     * Create a new bookmark
     */
    public createBookmark = ():void => {
        this._bookmarkService.createBookmark( this.bookmark ).subscribe(
            () => {
                this.getData();
                this.clearBookmark();
            }
        )
    }

    /**
     * Edit an existing bookmark
     * @param {string} bookmarkId - the bookmark to edit
     * @param {Object} bookmark - the new content
     */
    public editBookmark = ( bookmark: any ) => {
        this._bookmarkService.updateBookmark( this.target._id, this.target ).subscribe(
            () => {
                this.getData();
                this.clearBookmark();
            }
        )
    }

    /**
     * Delete an existing event
     * @param {string} bookmarkId - the bookmark to delete
     */
    public deleteBookmark = ( ): void => {
        this._bookmarkService.deleteBookmark( this.target._id ).subscribe(
            () => {
                this.getData();
                this.clearBookmark();
            }
        )
    };

    /**
     * Reset the targeted bookmark
     */
    private clearBookmark = (): void => {
        this.target = {
            _id: '',
            creator: this._userService.fetchUser().username,
            title: '',
            description: '',
            url: '',
            image: '',
            date_created: new Date(),
            tags: ''
        };
    }

}
