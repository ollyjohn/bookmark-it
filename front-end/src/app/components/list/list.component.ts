import { Component, OnInit } from '@angular/core';
import { Bookmark } from '../../models/bookmark';
import { BookmarkService } from '../../services/bookmark/bookmark.service';
import { UserService } from '../../services/user/user.service';

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
    constructor( private _bookmarkService: BookmarkService, private _userService: UserService ) { }

    ngOnInit() {
        this.getData();
    }

    /**
     * Get all bookmarks for the active user
     */
    private getData = (): void => {
        const user = this._userService.fetchUser();
        this._bookmarkService.getBookmarksByCreator( user.username ).subscribe(
            ( data ) => { 
                console.log( data );
                this.data = data.bookmarks;
            }
        )
    }

    /**
     * Set the target bookmark for any CRUD operations (mainly the U & D operations)
     * @param {string} bookmarkId - the bookmark to target
     */
    private setTarget = ( bookmark: any ): void => {
        this.bookmark = bookmark;
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
        console.log( bookmark );
        this._bookmarkService.updateBookmark( bookmark._id, bookmark ).subscribe( 
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
        this._bookmarkService.deleteBookmark( this.bookmark._id ).subscribe(
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
        this.bookmark = {
            _id: '',
            creator: this._userService.fetchUser().username,
            title: '',
            description: '',
            url: '',
            image: '',
            date_created: new Date(),
            tags: ''
        }
    }

}
