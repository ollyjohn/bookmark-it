import { Component } from '@angular/core';
import{BookmarkComponent} from './bookmark.component'

@Component({
  selector: 'app-root',
  template: `<h1>{{name}}</h1>`
})
export class AppComponent  {
  name='My First Bookmark';
}
