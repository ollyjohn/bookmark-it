const express = require( 'express' );
const router = express.Router();
const passport = require( 'passport' );
const jwt = require( 'jsonwebtoken' );

const config = require( '../config/db' );

const User = require( '../model/user' );

router.post( '/register', ( request, response, next ) => {

    console.log( `>> [ ATTEMPTING TO REGISTER USER ${ request.body.username } AT ${ new Date().toISOString() } ]`)
    
    const user = new User( { 
        forename: request.body.forename,
        surname: request.body.surname,
        dob: request.body.dob,
        email: request.body.email,
        username: request.body.username,
        password: request.body.password
    } );

    User.getUserByUsername( request.body.username, ( err, results ) => {
        if ( !err && results ) {
            console.log( '>> [ ERROR - USERNAME ALREADY EXISTS ]')
            response.json( { success: false, msg: 'User with that username already exists' } );
        } else if ( !results ) {
            User.createUser( user, ( err, user ) => {
                if ( err ) {
                    console.log( `>> [ ERROR - USER NOT CREATED ]`)
                    response.json( { success: false, msg: 'Failed to create user' } );
                    throw err;
                } else {
                    console.log( '>> [ SUCCESS - USER CREATED ]')
                    response.json( { success: true, msg: 'User created!' } );
                }
            } );
        }
    } );
    
} );

router.post( '/auth', ( request, response, next ) => {

    const username = request.body.username;
    const password = request.body.password;

    console.log( `>> [ AUTHENTICATING USER ${ username } ]` );

    User.getUserByUsername( username, ( err, result ) => {
        // if some internal error...
        if ( err ) {
            console.log( '>> [ ERROR - COULD NOT AUTHENTICATE ]' );
            throw err;
        }

        // if no user found...
        if ( !result ) {
            console.log( '>> [ ERROR - USER NOT FOUND ]' );
            return response.json( { success: false, msg: 'User not found' } );
        }

        let user = result;

        // otherwise (success)...
        console.log( '>> [ USER FOUND - VERIFYING PASSWORD ]' );
        User.compare( password, user.password, ( err, match ) => {

            if ( err ) {
                console.log( '>> [ ERROR - COULD NOT VERIFY ]' );
                throw err;
            }
            if ( match ) {
                console.log( '>> [ SUCCESS - USER VERIFIED ]' );
                let stripped = {
                    _id: user._id,
                    username: user.username,
                    forename: user.forename,
                    surname: user.surname
                };
                const token = jwt.sign( stripped, config.secret, {
                    //expires in 1 week
                    expiresIn: 3600*24*7
                } );
                response.json( { success: true, token: 'JWT ' + token, user: stripped } );


            } else {
                console.log( '>> [ FAILURE - INCORRECT PASSWORD ]' );
                return response.json( { success: false, msg: 'Incorrect password.' } );
            }
        })
    } );

} );

router.get( '/profile', passport.authenticate( 'jwt', { session: false } ), ( request, response, next ) => {
    response.json( { user: request.user[0] } );
} );

module.exports = router;