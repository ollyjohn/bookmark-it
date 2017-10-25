/**
 * Created by tomaszosuchowski on 10/25/17.
 */
import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {map} from  'rxjs/operator/map';

@Injectable()
export class HttpService{
 private data;

    constructor(private http:Http){

}

getData(){

    return this.http.get('http://localhost:8080/users/')
        .map(response => response.json());
}

createBookmark(bookmark) {
    let body = JSON.stringify(bookmark);
    return this.http.post('/api/', body, options ).map((res: Response) => res.json());
}

updateBookmark(bookmark) {
    let body = JSON.stringify(bookmark);
    return this.http.put('/api/' + bookmark_id, body, options ).map((res: Response) => res.json());


}
deleteBookmark(bookmark_id) {
    return this.http.delete('/api/' + bookmark_id);
}



}
