/**
 * Created by tomaszosuchowski on 10/25/17.
 */
import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {map} from  'rxjs/operator/map';

@Injectable()
export class BookmarkService{
 private data;

    constructor(private  _http:Http){ }

getBookmark(){

    return this._http.get('http://localhost:8080/users/')
        .map(response => response.json());
}

createBookmark(bookmark) {
    let body = JSON.stringify(bookmark);
    return this._http.post('/api/', body, options ).map((res: Response) => res.json());
}

updateBookmark(bookmark) {
    let body = JSON.stringify(bookmark);
    return this._http.put('/api/' + bookmark_id, body, options ).map((res: Response) => res.json());


}
deleteBookmark(bookmark_id) {
    return this._http.delete('/api/' + bookmark_id);
}



}
