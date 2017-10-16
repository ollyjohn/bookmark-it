import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BookmarkComponent } from './bookmark.component';
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, BookmarkComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
