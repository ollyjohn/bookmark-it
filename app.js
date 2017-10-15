// Dependency requires
const express = require( 'express' );
const path = require( 'path' );
const bodyParser = require( 'body-parser' );
const cors = require( 'cors' );

// Server setup
const app = express();
const port = 8080;

app.use( cors() );
app.use( express.static( path.join( __dirname, 'www' ) ) );
app.use( bodyParser.json() );

/**
 * Set response for entry point to the application
 */
app.get( '/', ( request, response ) => {
    response.sendFile( path.join( __dirname, 'front/public/index.html' ) );
} );
/**
 * Set response for erroneous routes
 */
app.get( '*', ( request, response ) => {
    //TODO: Add a component to the angular app to route to
    response.send( 'NOT FOUND.' );
} );

app.listen( port, () => {
    console.log( `>> [ SERVER UP AND LISTENING ON PORT ${port} ]` );
} );