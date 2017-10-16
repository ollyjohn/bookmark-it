import { Component } from '@angular/core';
import{BookmarkComponent} from './bookmark.component'

@Component({
  selector: 'app-root',
  template: `<my-bookmark></my-bookmark>`
})
export class AppComponent  {
  name='My First Bookmark';
}
