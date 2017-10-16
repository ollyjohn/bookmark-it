const express = require( 'express' );
const router = express.Router();

const Bookmark = require( '../model/bookmark' );

router.post( '/create', ( request, response ) => {

    console.log( `>> [ ATTEMPTING TO CREATE BOOKMARK ${ request.body.title } AT ${ new Date().toISOString() } ]` );
    
    const bookmark = new Bookmark( {
        creator: request.body.creator,
        title: request.body.title,
        description: request.body.description,
        url: request.body.url,
        image: request.body.image,
        date_created: new Date().toISOString(),
        date_updated: null
    } );

    Bookmark.createBookmark( bookmark, ( err, bookmark ) => {
        if ( err ) {
            console.log( `>> [ ERROR - BOOKMARK NOT CREATED ]` );
            response.json( { success: false, msg: 'Failed to create bookmark' } );
            throw err;
        } else {
            console.log( '>> [ SUCCESS - BOOKMARK CREATED ]' );
            response.json( { success: true, msg: 'Bookmark created!' } );
        }
    } );
} );

router.get( '/', ( request, response ) => {
    console.log( `>> [ ATTEMPTING TO FETCH ALL BOOKMARKS AT ${ new Date().toISOString() } ]` );

    Bookmark.getBookmarks( ( err, bookmarks ) => {
        if ( err ) {
            console.log( '>> [ ERROR - SERVER FAULT ]' );
            response.json( { success: false, msg: 'Something went wrong' } );
            throw err;
        }
        if ( bookmarks.length === 0 ) {
            console.log( '>> [ SUCCESS, BUT EMPTY PAYLOAD ]' );
            response.json( { success: true, msg: 'No bookmarks' } );
        } else {
            console.log( '>> [ SUCCESS - BOOKMARKS FETCHED ]' );
            response.json( { success: true, bookmarks: bookmarks } );
        }
    } );
} );


router.get( '/:bookmarkId', ( request, response ) => {
    
    const bookmarkId = request.params.id;
    
    console.log( `>> [ ATTEMPTING TO FETCH BOOKMARK WITH ID ${ bookmarkId } AT ${ new Date().toISOString() } ]` );

    Bookmark.getBookmarkById( bookmarkId, ( err, bookmark ) => {
        if ( err ) {
            console.log( '>> [ ERROR - BOOKMARK NOT CREATED ]' );
            response.json( { success: false, msg: 'Something went wrong' } );
            throw err;
        } 
        if ( !bookmark ) {
            console.log( '>> [ ERROR - BOOKMARK NOT FOUND ]' );
            response.json( { success: false, msg: 'Bookmark not found' } );
        } else {
            console.log( '>> [ SUCCESS - BOOKMARK FETCHED ]' );
            response.json( { success: true, bookmark: bookmark } );
        }
    } );

} );

router.get( '/author/:authorId', ( request, response, next ) => {

    const authorId = request.params.authorId;

    console.log( `>> [ ATTEMPTING TO FETCH ALL BOOKMARKS BY USER ${ authorId } AT ${ new Date().toISOString() } ]` );

    Bookmark.getBookmarksByAuthor( authorId, ( err, bookmarks ) => {
        if ( err ) {
            console.log( '>> [ ERROR - SERVER FAULT ]' );
            response.json( { success: false, msg: 'Something went wrong' } );
            throw err;
        }
        if ( bookmarks.length === 0 ) {
            console.log( '>> [ ERROR - NO BOOKMARKS FOUND ]' );
            response.json( { success: true, msg: `No bookmarks found by ${ authorId }`, bookmarks: bookmarks } );
        } else {
            console.log( '>> [ SUCCESS - BOOKMARKS FETCHED ]' );
            response.json( { success: true, bookmarks: bookmarks } );
        }
    } );
} );

router.put( '/update/id', ( request, response, next ) => {

    console.log( `>> [ ATTEMPTING TO UPDATE BOOKMARK ${ request.body.id } AT ${ new Date().toISOString() } ]` );

    Bookmark.updateBookmarkById( request.body.id, request.body.bookmark, ( err, bookmark ) => {
        if ( err ) {
            console.log( '>> [ ERROR - SERVER ]' );
            response.json( { success: false, msg: 'Something went wrong' } );
            throw err;
        } else {
            console.log( '>> [ SUCCESS - BOOKMARK UPDATED ]' );
            response.json( { success: true, msg: 'Bookmark updated!' } );
        }
    } );
} );

router.delete( '/:id', ( request, response, next ) => {

    console.log( `>> [ ATTEMPTING TO DELETE BOOKMARK ${ request.params.id } AT ${ new Date().toISOString() } ]` );

    Bookmark.deleteBookmarkById( request.params.id, ( err, echo ) => {
        if ( err ) {
            console.log( '>> [ ERROR - SERVER ]' );
            response.json( { success: false, msg: 'Something went wrong' } );
            throw err;
        } else {
            console.log( '>> [ SUCCESS - BOOKMARK DELETED ]' );
            response.json( { success: true, msg: 'Bookmark deleted' } );
        }
    } );

} );

module.exports = router;