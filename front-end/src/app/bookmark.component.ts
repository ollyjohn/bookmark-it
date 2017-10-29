import {Component} from '@angular/core';

@Component({
    selector: 'my-bookmark',
    template: `<h1>{{name}}</h1>
              <h2>{{title}}</h2><h2>{{description}}</h2>`
  })

  export class BookmarkComponent  { 
      
    name:string ='My Bookmark';
    title:string ='title';
    description:string ='my first bookmark' 

}