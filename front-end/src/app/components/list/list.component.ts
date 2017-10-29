import { Component, OnInit } from '@angular/core';
import { Bookmark } from '../../models/bookmark';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    private data: any[] = [
        {
            id: '1',
            creator: 'jim.bob',
            title: 'Example bookmark',
            description: 'This is an example bookmark',
            date_created: new Date(),
            image: 'https://picsum.photos/500/250/?image=10',
            url: 'https://google.com',
            tags: ['test', 'example', 'blue'],
            isHovered: false
        },{
            id: '2',
            creator: 'jim.bob',
            title: 'Example bookmark',
            description: 'This is an example bookmark',
            date_created: new Date(),
            image: 'https://picsum.photos/500/250/?image=20',
            url: 'https://google.com',
            tags: ['test', 'example', 'green'],
            isHovered: false
        },{
            id: '3',
            creator: 'jim.bob',
            title: 'Example bookmark',
            description: 'This is an example bookmark',
            date_created: new Date(),
            image: 'https://picsum.photos/500/250/?image=30',
            url: 'https://google.com',
            tags: ['test', 'example', 'grey'],
            isHovered: false
        },{
            id: '4',
            creator: 'jim.bob',
            title: 'Example bookmark',
            description: 'This is an example bookmark',
            date_created: new Date(),
            image: 'https://picsum.photos/500/250/?image=40',
            url: 'https://google.com',
            tags: ['test', 'example', 'brown'],
            isHovered: false
        },{
            id: '5',
            creator: 'jim.bob',
            title: 'Example bookmark',
            description: 'This is an example bookmark',
            date_created: new Date(),
            image: 'https://picsum.photos/500/250/?image=50',
            url: 'https://google.com',
            tags: ['test', 'example', 'blue'],
            isHovered: false
        },{
            id: '6',
            creator: 'jim.bob',
            title: 'Example bookmark',
            description: 'This is an example bookmark',
            date_created: new Date(),
            image: 'https://picsum.photos/500/250/?image=60',
            url: 'https://google.com',
            tags: ['test', 'example', 'green'],
            isHovered: false
        },{
            id: '7',
            creator: 'jim.bob',
            title: 'Example bookmark',
            description: 'This is an example bookmark',
            date_created: new Date(),
            image: 'https://picsum.photos/500/250/?image=70',
            url: 'https://google.com',
            tags: ['test', 'example', 'grey'],
            isHovered: false
        },{
            id: '8',
            creator: 'jim.bob',
            title: 'Example bookmark',
            description: 'This is an example bookmark',
            date_created: new Date(),
            image: 'https://picsum.photos/500/250/?image=80',
            url: 'https://google.com',
            tags: ['test', 'example', 'brown'],
            isHovered: false
        }
    ];
    private target: string = '';
    private user: User = {
        username: '',
        forename: '',
        surname: ''
    };
    private bookmark = {
        creator: this.user.username,
        title: '',
        description: '',
        url: '',
        image: '',
        date_created: new Date(),
        tags: ''
    };

    constructor( private _router: Router ) {
        
    }

    ngOnInit() {
        this.setUser();
    }

    /**
     * Navigate to a new route
     * @param {string} route
     */
    private go = ( route: string ): void => {
        this._router.navigate( [ route ] );
    }

    /**
     * Fetch the logged in user & set it to a useable variable
     */
    private setUser = (): void => {
        const local = JSON.parse( localStorage.getItem( 'userInfo' ) ); 
        this.user = {
            username: local.username,
            forename: local.forename,
            surname:  local.surname
        };
    }

    /**
     * set the target bookmark for any CRUD operations (mainly the U & D operations)
     * @param {string} bookmarkId - the bookmark to target
     */
    private setTarget = ( bookmark: string ): void => {
        this.target = bookmark;
    }

    private createBookmark() {
        let bookmark = this.bookmark;

        console.log( bookmark );
    }

}
