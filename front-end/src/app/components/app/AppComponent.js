/**
 * Created by tomaszosuchowski on 10/25/17.
 */
@Component({
    selector: 'bookmark-app',
    template:`

  <ul>
    <li *ngFor="let bookmark of bookmarks"><input type="text" name="bookmark" [(ngModel)]="bookmark.name"><button (click)="updateBookmark(bookmark)">Save</button> <button (click)="deleteBookmark(bookmark)">Delete</button></li>
  </ul>
  <p>Create new bookmark: <input type="text" name="new_bookmark" [(ngModel)]="new_food"><button (click)="createBookmark(bookmark)">Save</button></p>

  `
})
export class AppComponent {



    public bookmark;



    createBookmark(name) {
        let bookmark = {name: name};
        this._demoService.createBookmark(bookmark).subscribe(
                data => {
                // refresh the list
                this.getData();
                return true;
            },
                error => {

                return Observable.throw(error);
            }
        );
    }

    updateBookmark(name) {
        this._demoService.updateData(data).subscribe(
                data => {
                // refresh the list
                this.getData();
                return true;
            },
                error => {

                return Observable.throw(error);
            }
        );
    }

    deleteFood(name) {
        if (confirm("Are you sure you want to delete " + bookmark.name + "?")) {
            this._demoService.deleteBookmark(bookmark).subscribe(
                    data => {
                    // refresh the list
                    this.getData();
                    return true;
                },
                    error => {

                    return Observable.throw(error);
                }
            );
        }
    }
}
