var express = require( 'express' );

var path = require( 'path' );

var paths = require( '../paths.js' );

var router = express.Router( );

router.use( '/static', express.static(

  paths.client

));

router.use( '/dependencies', express.static(

  paths.dependencies

));

router.get( '/', function( request, response ) {

  response.sendFile( path.join(

    paths.client,

    'index.html'

  ));

});

module.exports = router;
