const mongoose = require( 'mongoose' );

const schema = mongoose.Schema( {
    creator: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    url: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    date_created: {
        type: Date,
        required: true
    },
    date_updated: {
        type: Date,
        required: false
    }
} );

const Bookmark = module.exports = mongoose.model( 'Bookmark', schema );

module.exports.getBookmarks = ( callback ) => {
    Bookmark.find( {}, callback );
}

module.exports.getBookmarkById = ( id, callback ) => {
    Bookmark.findOne( { _id: id }, callback );
};

module.exports.getBookmarksByCreator = ( creator, callback ) => {
    Bookmark.find( { creator: creator }, callback );
};

module.exports.createBookmark = ( bookmark, callback ) => {
    bookmark.save( callback );
};

module.exports.updateBookmark = ( id, content, callback ) => {
    Bookmark.update( { _id: id }, { 
        title: content.title, 
        description: content.description,
        image: content.image,
        date_updated: new Date().toISOString()
    }, callback );
};

module.exports.deleteBookmark = ( id, callback ) => {
    Bookmark.deleteOne( { _id: id }, callback );
};