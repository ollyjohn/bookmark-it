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
    private target: string = '';
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
    private setTarget = ( bookmarkId: string ): void => {
        this.target = bookmarkId;
    }

    /**
     * Create a new bookmark
     */
    private createBookmark = ():void => {
        this._bookmarkService.createBookmark( this.bookmark ).subscribe(
            () => {
                this.getData();
            }
        )
    }

    /**
     * Edit an existing bookmark
     * @param {string} bookmarkId - the bookmark to edit
     * @param {Object} bookmark - the new content
     */
    private editBookmark = ( bookmarkId: string, bookmark: Bookmark ) => {
        this._bookmarkService.updateBookmark( bookmarkId, bookmark );
    }

    private deleteBookmark = ( bookmarkId: string ): void => {
        this._bookmarkService.deleteBookmark( bookmarkId ).subscribe(
            () => {
                this.getData();
            }
        )
    }

}
