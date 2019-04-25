// deps
const express = require( 'express' );
const path = require( 'path' );
const bodyParser = require( 'body-parser' );
const cors = require( 'cors' );
const passport = require( 'passport' );
const mongoose = require( 'mongoose' );
const users = require( './routes/users' );
const bookmarks = require( './routes/bookmarks' );

//database connect
mongoose.connect( `mongodb://${process.env.db_user}:${process.env.db_pass}@${process.env.db_url}` );
mongoose.Promise = global.Promise;
mongoose.connection.on( 'connected', () => {
    console.log( '>> [ CONNECTED TO DATABASE ]' );
} );
mongoose.connection.on( 'error', ( err ) => {
    console.log( '>> [ ERROR CONNECTING TO DATABASE - ' + err + ' ]' );
} );

// setup
const app = express();

const forceSSL = () => {
    return ( request, response, next ) => {
        if ( request.headers[ 'x-forwarded-proto' ] !== 'https' ) {
            return response.redirect(
                `https://${request.get( 'Host' )}${request.url}`
            );
        }
        next();
    }
}

const port = process.env.PORT || 8080;

app.use( cors() );
app.use( express.static( path.join( __dirname, 'www' ) ) )
app.use( bodyParser.json() );
app.use( passport.initialize() );
app.use( passport.session() );

require( './config/passport' )( passport );

app.use( '/users', users );
app.use( '/bookmarks', bookmarks );

app.get( '*', ( request, response ) => {
    response.sendFile( path.join( __dirname, 'www/index.html' ) );
} );

app.listen( port, () => {
    console.log( `>> [ APPLICATION RUNNING ON PORT ${port} ]` );
} );