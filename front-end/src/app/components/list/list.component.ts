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

    private data: any[] = [];
    private bookmark = {
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
    private createBookmark = ():void => {
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
    private editBookmark = ( bookmarkId: string, bookmark: Bookmark ) => {
        console.log( bookmarkId, bookmark );
        // this._bookmarkService.updateBookmark( bookmarkId, bookmark ).subscribe( 
        //     () => {
        //         this.getData();
        //         this.clearBookmark();
        //     }
        // )
    }

    /**
     * Delete an existing event
     * @param {string} bookmarkId - the bookmark to delete
     */
    private deleteBookmark = ( bookmarkId: string ): void => {
        console.log( bookmarkId );
        this._bookmarkService.deleteBookmark( bookmarkId ).subscribe(
            () => {
                this.getData();
            }
        )
    };

    private clearBookmark = (): void => {
        this.bookmark = {
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
