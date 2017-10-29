const mongoose = require( 'mongoose' );
const bcrypt = require( 'bcryptjs' );
const config = require( '../config/db' );

const schema = mongoose.Schema( {
    forename: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
} );

const User = module.exports = mongoose.model( 'User', schema );

module.exports.getUserByID = ( id, callback ) => {
    
    User.findOne( { _id: id }, { _id: 1, name: 1, username: 1, email: 1 }, callback );

};

module.exports.getUserByUsername = ( username, callback ) => {
    User.findOne( { username: username }, { _id: 1, forename: 1, surname: 1, username: 1, password: 1, email: 1 }, callback );
};

module.exports.createUser = ( user, callback ) => {
    bcrypt.genSalt( 10, ( err, salt ) => {
        bcrypt.hash( user.password, salt, ( err, hash ) => {
            if( err ) throw err; 
            user.password = hash;
            user.save( callback );
        }); 
    });
};

module.exports.compare = ( candidate, actual, callback ) => {
    bcrypt.compare( candidate, actual, ( err, match ) => {        
        if ( err ) throw err;
        callback( null, match );
    } );
};